import {FilterSettings, MAX_MOVIES_AMOUNT} from '../../utils/const.js';
import {extend} from '../../utils/utils.js';
import {createMovie, createMoviesList} from '../../api/adapters/movies.js';

const initialState = {
  featuredMovie: {},
  moviesList: [],
  activeGenre: FilterSettings.INITIAL_VALUE,
  shownMoviesAmount: MAX_MOVIES_AMOUNT,
};

const ActionType = {
  LOAD_FEATURED_MOVIE: `LOAD_FEATURED_MOVIE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_SHOWN_AMOUNT: `SET_SHOWN_AMOUNT`,
};

const ActionCreator = {
  loadFeaturedMovie: (movie) => {
    return {
      type: ActionType.LOAD_FEATURED_MOVIE,
      payload: movie,
    };
  },
  loadMovies: (moviesList) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: moviesList,
    };
  },
  getFilteredList: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre,
  }),
  setShownAmount: () => ({
    type: ActionType.SET_SHOWN_AMOUNT,
    payload: MAX_MOVIES_AMOUNT,
  }),
};

const Operation = {
  loadFeaturedMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadFeaturedMovie(createMovie(response.data)));
      });
  },
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(createMoviesList(response.data)));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FEATURED_MOVIE:
      return extend(state, {
        featuredMovie: action.payload,
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        moviesList: action.payload,
      });
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
        shownMoviesAmount: MAX_MOVIES_AMOUNT,
      });
    case ActionType.SET_SHOWN_AMOUNT:
      return extend(state, {
        shownMoviesAmount: state.shownMoviesAmount + action.payload,
      });
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
