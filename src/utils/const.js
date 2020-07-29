const BASE_URL = `https://4.react.pages.academy/wtw`;
const MAX_MOVIES_AMOUNT = 8;
const MAX_SIMILAR_MOVIES_AMOUNT = 4;
const PLAYBACK_DELAY = 1000;
const TIMEOUT = 5;
const REVIEW_RATINGS = [1, 2, 3, 4, 5];

const URL = {
  MOVIES: `/films`,
  FEATURED: `/films/promo`,
  FAVORITE: `/favorite`,
  REVIEWS: `/comments`,
  LOGIN: `/login`,
};

const Status = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const TabNames = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const FilterSettings = {
  INITIAL_VALUE: `All genres`,
  MAX_AMOUNT: 9,
};

const Review = {
  MIN_RATING: 1,
  TEXT: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 400,
  },
};

const Rating = {
  SCORE_MILESTONES: {
    FIRST: 0,
    SECOND: 3,
    THIRD: 5,
    FOURTH: 8,
    FIFTH: 10,
  },
  LEVELS: {
    BAD: `Bad`,
    NORMAL: `Normal`,
    GOOD: `Good`,
    VERY_GOOD: `Very Good`,
    AWESOME: `Awesome`,
  },
};

const RatingChart = new Map([
  [[Rating.SCORE_MILESTONES.FIRST, Rating.SCORE_MILESTONES.SECOND], Rating.LEVELS.BAD],
  [[Rating.SCORE_MILESTONES.SECOND, Rating.SCORE_MILESTONES.THIRD], Rating.LEVELS.NORMAL],
  [[Rating.SCORE_MILESTONES.THIRD, Rating.SCORE_MILESTONES.FOURTH], Rating.LEVELS.GOOD],
  [[Rating.SCORE_MILESTONES.FOURTH, Rating.SCORE_MILESTONES.FIFTH], Rating.LEVELS.VERY_GOOD],
  [[Rating.SCORE_MILESTONES.FIFTH, Infinity], Rating.LEVELS.AWESOME],
]);

export {BASE_URL, MAX_MOVIES_AMOUNT, MAX_SIMILAR_MOVIES_AMOUNT, PLAYBACK_DELAY, TIMEOUT, REVIEW_RATINGS, URL, Status, AuthorizationStatus, TabNames, FilterSettings, Review, RatingChart};
