import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getStatus, getMoviesList} from '../../store/movies/selectors';
import {Router, Route, Switch} from 'react-router-dom';
import {Status} from '../../utils/const';
import {findItemById} from '../../utils/utils';
import history from '../../routing/history';
import {AppRoute} from '../../routing/route';
import {Movie} from '../../types/movie';
import PrivateRoute from '../../routing/private-route';
import withVideo from '../../hocs/with-video/with-video';
import withRating from '../../hocs/with-rating/with-rating';
import withTextInput from '../../hocs/with-text-input/with-text-input';
import withValidation from '../../hocs/with-validation/with-validation';
import LoginPage from '../login-page/login-page';
import MoviePage from '../movie-page/movie-page';
import VideoPlayer from '../video-player/video-player';
import ReviewPage from '../review-page/review-page';
import FavoriteList from '../favorite-list/favorite-list';
import ErrorPage from '../error-page/error-page';
import Main from '../main/main';

interface Props {
  moviesList: Movie[];
  status: number;
}

const VideoPlayerWrapped = withVideo(VideoPlayer);
const ReviewPageWrapped = withRating(withTextInput(withValidation(ReviewPage)));

class App extends PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const {moviesList, status} = this.props;

    switch (status) {
      case Status.BAD_REQUEST:
        return <ErrorPage status={status}/>;
      case Status.SERVER_ERROR:
        return <ErrorPage status={status}/>;
      case Status.OK:
        return <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.ROOT}>
              <Main/>
            </Route>
            <Route exact path={AppRoute.LOGIN}>
              <LoginPage/>
            </Route>
            <Route exact path={`${AppRoute.MOVIE}/:id`} render={(routeProps) => {
              const id = routeProps.match.params.id;
              const movie = findItemById(id, moviesList);

              return <MoviePage movie={movie} {...routeProps}/>;
            }}/>
            <Route exact path={`${AppRoute.PLAYER}/:id`} render={(routeProps) => {
              const id = routeProps.match.params.id;
              const movie = findItemById(id, moviesList);

              return <VideoPlayerWrapped movie={movie} isPlaying={true} isMuted={false} isPreview={false} {...routeProps}/>;
            }}/>
            <PrivateRoute exact path={AppRoute.FAVORITE} render={() => {
              return <FavoriteList/>;
            }}/>
            <PrivateRoute exact path={`${AppRoute.MOVIE}/:id/review`} render={(routeProps) => {
              const id = routeProps.match.params.id;
              const movie = findItemById(id, moviesList);

              return <ReviewPageWrapped movie={movie} {...routeProps}/>;
            }}/>
          </Switch>
        </Router>;
    }

    return null;
  }
}

const mapStateToProps = (state) => ({
  moviesList: getMoviesList(state),
  status: getStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
