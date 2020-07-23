import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../store/user/user.js';
import {getAuthorization} from '../../store/user/selectors.js';
import {AppRoute} from '../../routing/route.js';

const UserBlock = (props) => {
  const {authorizationStatus} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return <div className="user-block">
    {isAuthorized ? <Link to={AppRoute.FAVORITE}><div className="user-block__avatar">
      <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
    </div></Link> : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}
  </div>;
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorization(state),
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
