import React, {ReactElement} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {getAuthorizationCheck, getAuthorization} from '../store/user/selectors';
import {AppRoute} from './route';

interface Props {
  isAuthorizationChecked: boolean,
  isAuthorized: boolean,
  path: string,
  exact: boolean,
  render: () => ReactElement,
  component: ReactElement,
}

const PrivateRoute = (props: Props) => {
  const {isAuthorizationChecked, isAuthorized, path, exact, render, component} = props;

  if (!isAuthorizationChecked) {
    return null;
  }

  if (isAuthorized) {
    return <Route path={path} exact={exact} render={render} component={component}/>;
  }

  return <Redirect to={AppRoute.LOGIN}/>;
};

const mapStateToProps = (state) => ({
  isAuthorizationChecked: getAuthorizationCheck(state),
  isAuthorized: getAuthorization(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
