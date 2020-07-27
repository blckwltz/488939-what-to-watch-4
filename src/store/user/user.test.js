import {reducer, AuthorizationStatus, ActionType} from './user';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    isAuthorizationChecked: false,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    favoriteList: [],
    loginStatus: 200,
  });
});

it(`Reducer should change authorizationStatus to a given value`, () => {
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

  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    isAuthorizationChecked: true,
    authorizationStatus: AuthorizationStatus.AUTH,
  });

  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: AuthorizationStatus.NO_AUTH,
  })).toEqual({
    isAuthorizationChecked: true,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  });
});
