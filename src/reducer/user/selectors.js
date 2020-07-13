import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

const getAuthorization = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export {getAuthorization};
