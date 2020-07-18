import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getStatus} from '../../store/movies/selectors.js';
import {Router, Route, Switch} from 'react-router-dom';
import {Status} from '../../utils/const.js';
import history from '../../routing/history.js';
import {AppRoute} from '../../routing/route.js';
import LoginScreen from '../login-screen/login-screen.jsx';
import MoviePage from '../movie-page/movie-page.jsx';
import Main from '../main/main.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO add error screen
    const {status} = this.props;

    switch (status) {
      case Status.ERROR:
        return <div>{status}</div>;
      case Status.SERVER_ERROR:
        return <div>{status}</div>;
      case Status.OK:
        return <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.ROOT}>
              <Main/>
            </Route>
            <Route exact path={AppRoute.LOGIN}>
              <LoginScreen/>
            </Route>
            <Route exact path={`${AppRoute.MOVIE}/:id`} component={MoviePage}/>
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
