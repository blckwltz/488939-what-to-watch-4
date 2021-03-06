import React, {PureComponent, createRef, RefObject} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Status} from '../../utils/const';
import history from '../../routing/history';
import {AppRoute} from '../../routing/route';
import {ActionCreator as UserAction, Operation as UserOperation} from '../../store/user/user';
import {getAuthorization, getLoginStatus} from '../../store/user/selectors';

interface Props {
  isAuthorized: boolean;
  loginStatus: number;
  onSubmit: ({login, password}: {login: string; password: string}) => void;
  onFocus: () => void;
}

class LoginPage extends PureComponent<Props> {
  private readonly _loginRef: RefObject<HTMLInputElement>;
  private readonly _passwordRef: RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this._loginRef = createRef();
    this._passwordRef = createRef();
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFocus = this._handleFocus.bind(this);
  }

  componentDidMount() {
    const {isAuthorized} = this.props;

    if (isAuthorized) {
      history.push(AppRoute.ROOT);
    }
  }

  componentDidUpdate() {
    const {isAuthorized} = this.props;

    if (isAuthorized) {
      history.push(AppRoute.ROOT);
    }
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this._loginRef.current.value,
      password: this._passwordRef.current.value,
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
                id="user-email" onFocus={this._handleFocus} ref={this._loginRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                id="user-password" ref={this._passwordRef}/>
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
          <p>© 2020 What to watch Ltd.</p>
        </div>
      </footer>
    </div>;
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorization(state),
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

export {LoginPage};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
