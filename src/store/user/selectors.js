import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

const getAuthorization = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

const getFavoriteList = (state) => {
  return state[NAME_SPACE].favoriteList;
};

export {getAuthorization, getFavoriteList};
