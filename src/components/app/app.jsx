import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getStatus, getMoviesList} from '../../store/movies/selectors.js';
import {Router, Route, Switch} from 'react-router-dom';
import {Status} from '../../utils/const.js';
import {findItemById} from '../../utils/utils.js';
import history from '../../routing/history.js';
import {AppRoute} from '../../routing/route.js';
import PrivateRoute from '../../routing/private-route.jsx';
import withVideo from '../../hocs/with-video/with-video.jsx';
import withRating from '../../hocs/with-rating/with-rating.jsx';
import withTextInput from '../../hocs/with-text-input/with-text-input.jsx';
import withValidation from '../../hocs/with-validation/with-validation.jsx';
import LoginPage from '../login-page/login-page.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import VideoPlayer from '../video-player/video-player.jsx';
import ReviewPage from '../review-page/review-page.jsx';
import FavoriteList from '../favorite-list/favorite-list.jsx';
import ErrorPage from '../error-page/error-page.jsx';
import Main from '../main/main.jsx';

const VideoPlayerWrapped = withVideo(VideoPlayer);
const ReviewPageWrapped = withRating(withTextInput(withValidation(ReviewPage)));

class App extends PureComponent {
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

              return <VideoPlayerWrapped movie={movie} isPreview={false}/>;
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

App.propTypes = {
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
  ),
  status: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  moviesList: getMoviesList(state),
  status: getStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
