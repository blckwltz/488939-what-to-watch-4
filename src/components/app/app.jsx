import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getStatus} from '../../store/movies/selectors.js';
import {Router, Route, Switch} from 'react-router-dom';
import {Status} from '../../utils/const.js';
import history from '../../routing/history.js';
import {AppRoute} from '../../routing/route.js';
import PrivateRoute from '../../routing/private-route.jsx';
import withErrorMessages from '../../hocs/with-error-messages/with-error-messages.jsx';
import LoginPage from '../login-page/login-page.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import ReviewPage from '../review-page/review-page.jsx';
import FavoriteList from '../favorite-list/favorite-list.jsx';
import ErrorPage from '../error-page/error-page.jsx';
import Main from '../main/main.jsx';

const ReviewPageWrapped = withErrorMessages(ReviewPage);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {status} = this.props;

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
            <Route exact path={`${AppRoute.MOVIE}/:id`} component={MoviePage}/>
            {/* <Route exact path={`${AppRoute.MOVIE}/:id/player`} component={}/>*/}
            <PrivateRoute exact path={AppRoute.FAVORITE} component={FavoriteList}/>
            <PrivateRoute exact path={`${AppRoute.MOVIE}/:id/review`} component={ReviewPageWrapped}/>
          </Switch>
        </Router>;
    }

    return null;
  }
}

App.propTypes = {
  status: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  status: getStatus(state),
});

export {App};
export default connect(mapStateToProps)(App);
