import {createSelector} from "reselect";
import {AuthorizationStatus} from '../../utils/const';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.USER;

const getAuthorizationCheck = (state) => {
  return state[NAME_SPACE].isAuthorizationChecked;
};

const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getLoginStatus = (state) => {
  return state[NAME_SPACE].loginStatus;
};

const getFavoriteList = (state) => {
  return state[NAME_SPACE].favoriteList;
};

const getAuthorization = createSelector(
    getAuthorizationStatus,
    (status) => {
      return status === AuthorizationStatus.AUTH;
    }
);

export {getAuthorizationCheck, getLoginStatus, getFavoriteList, getAuthorization};
