import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

const getAuthorization = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getLoginStatus = (state) => {
  return state[NAME_SPACE].loginStatus;
};

const getFavoriteList = (state) => {
  return state[NAME_SPACE].favoriteList;
};

export {getAuthorization, getLoginStatus, getFavoriteList};
