import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {getAuthorizationCheck, getAuthorization} from '../store/user/selectors.js';
import {AppRoute} from './route.js';

const PrivateRoute = (props) => {
  const {isAuthorizationChecked, isAuthorized, path, exact, render, component} = props;

  if (!isAuthorizationChecked) {
    return null;
  }

  if (isAuthorized) {
    return <Route path={path} exact={exact} render={render} component={component}/>;
  }

  return <Redirect to={AppRoute.LOGIN}/>;
};

PrivateRoute.propTypes = {
  isAuthorizationChecked: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  render: PropTypes.func,
  component: PropTypes.elementType,
};

const mapStateToProps = (state) => ({
  isAuthorizationChecked: getAuthorizationCheck(state),
  isAuthorized: getAuthorization(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
