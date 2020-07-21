import {URL, Status, FilterSettings, MAX_MOVIES_AMOUNT} from '../../utils/const.js';
import {extend} from '../../utils/utils.js';
import {createMovie, createMoviesList} from '../../api/adapters/movies.js';

const initialState = {
  featuredMovie: {},
  moviesList: [],
  activeGenre: FilterSettings.INITIAL_VALUE,
  shownMoviesAmount: MAX_MOVIES_AMOUNT,
  status: Status.OK,
};

const ActionType = {
  LOAD_FEATURED_MOVIE: `LOAD_FEATURED_MOVIE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  UPDATE_STATUS: `UPDATE_STATUS`,
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_SHOWN_AMOUNT: `SET_SHOWN_AMOUNT`,
  UPDATE_MOVIE_STATUS: `UPDATE_MOVIE_STATUS`,
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
  updateStatus: (status) => {
    return {
      type: ActionType.UPDATE_STATUS,
      payload: status,
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
  updateMovieStatus: (movie) => ({
    type: ActionType.UPDATE_MOVIE_STATUS,
    payload: movie,
  }),
};

const Operation = {
  loadFeaturedMovie: () => (dispatch, getState, api) => {
    return api.get(URL.FEATURED)
      .then((response) => {
        dispatch(ActionCreator.loadFeaturedMovie(createMovie(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.updateStatus(Status.BAD_REQUEST));
      });
  },
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(URL.MOVIES)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(createMoviesList(response.data)));
      })
      .catch(() => {
        dispatch(ActionCreator.updateStatus(Status.BAD_REQUEST));
      });
  },
  updateMovieStatus: (id, status) => (dispatch, getState, api) => {
    return api.post(`${URL.FAVORITE}/${id}/${status}`)
      .then((response) => {
        dispatch(ActionCreator.updateMovieStatus(createMovie(response.data)));
      });
  }
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
    case ActionType.UPDATE_STATUS:
      return extend(state, {
        status: action.payload,
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
    case ActionType.UPDATE_MOVIE_STATUS:
      const updateMovieStatus = () => {
        const {isFavorite} = action.payload;
        const featuredMovie = state.featuredMovie;
        const moviesList = state.moviesList;
        const targetMovie = moviesList.find((item) => {
          return item.id === action.payload.id;
        });

        if (featuredMovie.id === targetMovie.id) {
          featuredMovie.isFavorite = isFavorite;
        }

        targetMovie.isFavorite = isFavorite;

        return {
          featuredMovie,
          moviesList,
        };
      };

      return extend(state, updateMovieStatus());
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
