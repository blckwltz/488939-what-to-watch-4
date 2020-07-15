import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../reducer/user/user.js';
import {getAuthorization} from '../../reducer/user/selectors.js';

const UserBlock = (props) => {
  const {authorizationStatus} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return <div className="user-block">
    {isAuthorized ? <div className="user-block__avatar">
      <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
    </div> : <a href="sign-in.html" className="user-block__link">Sign in</a>}
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
