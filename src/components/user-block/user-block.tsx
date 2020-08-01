import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAuthorization} from '../../store/user/selectors';
import {AppRoute} from '../../routing/route';

interface Props {
  isAuthorized: boolean;
}

const UserBlock = (props: Props) => {
  const {isAuthorized} = props;

  return <div className="user-block">
    {isAuthorized ? <Link to={AppRoute.FAVORITE}><div className="user-block__avatar">
      <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
    </div></Link> : <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}
  </div>;
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorization(state),
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
