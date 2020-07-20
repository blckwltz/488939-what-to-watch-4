const BASE_URL = `https://4.react.pages.academy/wtw`;
const MAX_MOVIES_AMOUNT = 8;
const PLAYBACK_DELAY = 1000;
const TIMEOUT = 5;

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
  ERROR: 404,
  SERVER_ERROR: 500,
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

export {BASE_URL, MAX_MOVIES_AMOUNT, PLAYBACK_DELAY, TIMEOUT, URL, Status, TabNames, FilterSettings, RatingChart};
