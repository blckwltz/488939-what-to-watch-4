import {FilterSettings, RatingChart} from './const.js';

const isValueInRange = (value, min, max) => {
  return min <= value && value < max;
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

const getGenresList = (list) => {
  const genresList = list.map((item) => {
    return item.genre;
  });
  const uniqueGenresList = Array.from(new Set(genresList.sort())).slice(0, FilterSettings.MAX_AMOUNT);

  return [FilterSettings.INITIAL_VALUE, ...uniqueGenresList];
};

const formatDate = (date) => {
  const options = {year: `numeric`, month: `long`, day: `numeric`};

  return new Intl.DateTimeFormat(`en-US`, options).format(new Date(date));
};

const formatTime = (time) => {
  const hours = time % 60;
  const minutes = time - hours * 60;
  return `${hours}h ${minutes}m`;
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {getRatingLevel, getGenresList, formatDate, formatTime, extend};
