import {FilterSettings} from './const.js';
import {extend} from './utils.js';
import {featuredMovie, moviesList} from './mocks/films.js';

const initialState = {
  featuredMovie,
  moviesList,
  filteredList: moviesList,
  activeGenre: FilterSettings.INITIAL_VALUE,
};

const ActionType = {
  GET_FILTERED_LIST: `GET_FILTERED_LIST`,
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
      },
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FILTERED_LIST:
      return extend(state, {
        filteredList: action.payload.filteredList,
        activeGenre: action.payload.genre,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
