import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {AuthorizationStatus} from '../store/user/user.js';
import {getAuthorization} from '../store/user/selectors.js';
import {AppRoute} from './route.js';

const PrivateRoute = (props) => {
  const {authorizationStatus, path, exact, component} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  if (isAuthorized) {
    return <Route path={path} exact={exact} component={component}/>;
  }

  return <Redirect to={AppRoute.LOGIN}/>;
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorization(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
