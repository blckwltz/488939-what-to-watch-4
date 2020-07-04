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
  GET_FILTERED_LIST: `GET_FILTERED_LIST`,
  SET_SHOWN_AMOUNT: `SET_SHOWN_AMOUNT`,
};

const ActionCreator = {
  getFilteredList: (list, genre) => {
    const filteredList = genre === FilterSettings.INITIAL_VALUE ? list : list.filter((item) => {
      return item.genre === genre;
    });

    return {
      type: ActionType.GET_FILTERED_LIST,
      payload: {
        filteredList,
        genre,
        shownMoviesAmount: MAX_MOVIES_AMOUNT,
      },
    };
  },
  setShownAmount: () => ({
    type: ActionType.SET_SHOWN_AMOUNT,
    payload: MAX_MOVIES_AMOUNT,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILTERED_LIST:
      return extend(state, {
        filteredList: action.payload.filteredList,
        activeGenre: action.payload.genre,
        shownMoviesAmount: action.payload.shownMoviesAmount,
      });
    case ActionType.SET_SHOWN_AMOUNT:
      return extend(state, {
        shownMoviesAmount: state.shownMoviesAmount + action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
