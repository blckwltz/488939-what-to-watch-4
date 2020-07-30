import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.REVIEWS;

const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

const getPostStatus = (state) => {
  return state[NAME_SPACE].postStatus;
};

const getPublishedStatus = (state) => {
  return state[NAME_SPACE].isPublished;
};

export {getReviews, getPostStatus, getPublishedStatus};
