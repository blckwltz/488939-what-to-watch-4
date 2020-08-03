import {FilterSettings, Review, RatingChart} from './const';

const isValueInRange = (value, min, max) => {
  return min <= value && value < max;
};

const findItemById = (id, list) => {
  return list.find((item) => {
    return item.id === Number(id);
  });
};

const getRatingLevel = (score) => {
  let level;

  for (const key of RatingChart.keys()) {
    if (isValueInRange(score, ...key)) {
      level = RatingChart.get(key);
    }
  }

  return level;
};

const validateReviewRating = (rating) => {
  return Number(rating) >= Review.MIN_RATING;
};

const validateReviewText = (text) => {
  return text.length >= Review.TEXT.MIN_LENGTH && text.length <= Review.TEXT.MAX_LENGTH;
};

const getGenresList = (list) => {
  const genresList = list.map((item) => {
    return item.genre;
  });
  const uniqueGenresList = [...new Set(genresList.sort())].slice(0, FilterSettings.MAX_AMOUNT);

  return [FilterSettings.INITIAL_VALUE, ...uniqueGenresList];
};

const formatDate = (date) => {
  const options = {year: `numeric`, month: `long`, day: `numeric`};

  return new Intl.DateTimeFormat(`en-US`, options).format(new Date(date));
};

const formatTime = (time) => {
  const hours = Math.floor((time / 60) % 60);
  const minutes = time - hours * 60;
  return `${hours}h ${minutes}m`;
};

const addLeadingZero = (value) => {
  return Number(value) < 10 ? `0${value}` : `${value}`;
};

const getTimeString = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time % 60);

  return `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {findItemById, getRatingLevel, validateReviewRating, validateReviewText, getGenresList, formatDate, formatTime, getTimeString, extend};
