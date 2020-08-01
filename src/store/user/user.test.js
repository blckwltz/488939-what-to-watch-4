import MockAdapter from 'axios-mock-adapter';
import {AuthorizationStatus} from '../../utils/const';
import {createAPI} from '../../api/api';
import {moviesList} from '../../__test-mocks__/movies';
import {noop} from '../../__test-mocks__/noop';
import {createMoviesList} from '../../api/adapters/movies';
import {reducer, ActionType, Operation} from './user';

const api = createAPI(noop, noop, noop, noop, noop);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    isAuthorizationChecked: false,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    favoriteList: [],
    loginStatus: 200,
  });
});

it(`Reducer should update favorite list to a given value`, () => {
  expect(reducer({
    favoriteList: [],
  }, {
    type: ActionType.LOAD_FAVORITE_LIST,
    payload: moviesList,
  })).toEqual({
    favoriteList: moviesList,
  });
});

it(`Reducer should change authorization status to a given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    isAuthorizationChecked: true,
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    isAuthorizationChecked: true,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});

it(`Reducer should update login status to a given value`, () => {
  expect(reducer({
    loginStatus: 200,
  }, {
    type: ActionType.UPDATE_LOGIN_STATUS,
    payload: 401,
  })).toEqual({
    loginStatus: 401,
  });

  expect(reducer({
    loginStatus: 401,
  }, {
    type: ActionType.UPDATE_LOGIN_STATUS,
    payload: 200,
  })).toEqual({
    loginStatus: 200,
  });
});

describe(`Operation should work correctly`, () => {
  it(`Should make a correct API GET call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const authorizationLoader = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, responseMock);

    return authorizationLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API POST call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const authorizationLoader = Operation.login({email: `user@mail.com`, password: `12345`});

    apiMock
      .onPost(`/login`)
      .reply(200, responseMock);

    return authorizationLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const responseMock = [{fake: true}];
    const dispatch = jest.fn();
    const favoriteListLoader = Operation.loadFavoriteList();

    apiMock
      .onGet(`/favorite`)
      .reply(200, responseMock);

    return favoriteListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_LIST,
          payload: createMoviesList(responseMock),
        });
      });
  });
});
