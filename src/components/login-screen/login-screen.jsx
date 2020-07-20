import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Status} from '../../utils/const.js';
import history from '../../routing/history.js';
import {AppRoute} from '../../routing/route.js';
import {AuthorizationStatus, ActionCreator as UserAction, Operation as UserOperation} from '../../store/user/user.js';
import {getAuthorization, getLoginStatus} from '../../store/user/selectors.js';

class LoginScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
  }

  componentDidUpdate() {
    const {authorizationStatus} = this.props;
    const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

    if (isAuthorized) {
      history.push(AppRoute.ROOT);
    }
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  _handleFocus() {
    const {onFocus} = this.props;

    onFocus();
  }

  render() {
    const {loginStatus} = this.props;

    return <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={this._handleSubmit}>
          {loginStatus === Status.BAD_REQUEST && <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>}
          {loginStatus === Status.SERVER_ERROR && <div className="sign-in__message">
            <p>We can’t recognize this email <br/> and password combination. Please try again.</p>
          </div>}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${loginStatus === Status.BAD_REQUEST ? `sign-in__field--error` : ``}`}>
              <input className="sign-in__input" type="text" inputMode="email" placeholder="Email address" name="user-email"
                id="user-email" onFocus={this._handleFocus} ref={this.loginRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                id="user-password" ref={this.passwordRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>;
  }
}

LoginScreen.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  loginStatus: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorization(state),
  loginStatus: getLoginStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(UserOperation.login(authData));
  },
  onFocus() {
    dispatch(UserAction.updateLoginStatus(Status.OK));
  }
});

export {LoginScreen};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
