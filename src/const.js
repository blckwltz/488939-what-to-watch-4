const MAX_MOVIES_AMOUNT = 8;
const PLAYBACK_DELAY = 1000;

const TabNames = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const FilterSettings = {
  INITIAL_VALUE: `All genres`,
  MAX_AMOUNT: 10,
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

export {MAX_MOVIES_AMOUNT, PLAYBACK_DELAY, TabNames, FilterSettings, RatingChart};
