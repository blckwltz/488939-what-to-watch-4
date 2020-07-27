import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.REVIEWS;

const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

const getPostStatus = (state) => {
  return state[NAME_SPACE].postStatus;
};

export {getReviews, getPostStatus};
