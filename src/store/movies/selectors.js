import {createSelector} from "reselect";
import {FilterSettings} from '../../utils/const.js';
import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.MOVIES;

const getFeaturedMovie = (state) => {
  return state[NAME_SPACE].featuredMovie;
};

const getMoviesList = (state) => {
  return state[NAME_SPACE].moviesList;
};

const getStatus = (state) => {
  return state[NAME_SPACE].status;
};

const getShownMoviesAmount = (state) => {
  return state[NAME_SPACE].shownMoviesAmount;
};

const getActiveGenre = (state) => {
  return state[NAME_SPACE].activeGenre;
};

const getFilteredList = createSelector(
    getMoviesList,
    getActiveGenre,
    (list, genre) => {
      return genre === FilterSettings.INITIAL_VALUE ? list : list.filter((item) => {
        return item.genre === genre;
      });
    }
);

export {getFeaturedMovie, getMoviesList, getStatus, getActiveGenre, getShownMoviesAmount, getFilteredList};
