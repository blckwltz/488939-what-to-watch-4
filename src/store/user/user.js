import {URL, Status, AuthorizationStatus} from '../../utils/const';
import {extend} from '../../utils/utils';
import {createMoviesList} from '../../api/adapters/movies';

const initialState = {
  isAuthorizationChecked: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  favoriteList: [],
  loginStatus: Status.OK,
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_FAVORITE_LIST: `LOAD_FAVORITE_LIST`,
  UPDATE_LOGIN_STATUS: `UPDATE_LOGIN_STATUS`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: status,
    };
  },
  loadFavoriteList: (list) => {
    return {
      type: ActionType.LOAD_FAVORITE_LIST,
      payload: list,
    };
  },
  updateLoginStatus: (status) => {
    return {
      type: ActionType.UPDATE_LOGIN_STATUS,
      payload: status,
    };
  },
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(URL.LOGIN)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(URL.LOGIN, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  },
  loadFavoriteList: () => (dispatch, getState, api) => {
    return api.get(URL.FAVORITE)
      .then((response) => {
        dispatch(ActionCreator.loadFavoriteList(createMoviesList(response.data)));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return extend(state, {
        isAuthorizationChecked: true,
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_FAVORITE_LIST:
      return extend(state, {
        favoriteList: action.payload,
      });
    case ActionType.UPDATE_LOGIN_STATUS:
      return extend(state, {
        loginStatus: action.payload,
      });
  }

  return state;
};


export {reducer, ActionCreator, ActionType, AuthorizationStatus, Operation};
