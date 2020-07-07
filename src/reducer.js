import {FilterSettings, MAX_MOVIES_AMOUNT} from './const.js';
import {extend} from './utils.js';
import {featuredMovie, moviesList} from './mocks/films.js';

const initialState = {
  featuredMovie,
  moviesList,
  filteredList: moviesList,
  activeGenre: FilterSettings.INITIAL_VALUE,
  shownMoviesAmount: MAX_MOVIES_AMOUNT,
};

const ActionType = {
  SET_ACTIVE_GENRE: `SET_ACTIVE_GENRE`,
  SET_SHOWN_AMOUNT: `SET_SHOWN_AMOUNT`,
};

const filterListByGenre = (list, genre) => {
  return genre === FilterSettings.INITIAL_VALUE ? list : list.filter((item) => {
    return item.genre === genre;
  });
};

const ActionCreator = {
  getFilteredList: (genre) => ({
    type: ActionType.SET_ACTIVE_GENRE,
    payload: genre,
  }),
  setShownAmount: () => ({
    type: ActionType.SET_SHOWN_AMOUNT,
    payload: MAX_MOVIES_AMOUNT,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_GENRE:
      return extend(state, {
        filteredList: filterListByGenre(state.moviesList, action.payload),
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

export {reducer, ActionType, ActionCreator};
