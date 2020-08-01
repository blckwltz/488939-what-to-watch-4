import MockAdapter from 'axios-mock-adapter';
import {FilterSettings, MAX_MOVIES_AMOUNT} from '../../utils/const';
import {createAPI} from '../../api/api';
import {featuredMovie, moviesList} from '../../__test-mocks__/movies.ts';
import {noop} from '../../__test-mocks__/noop';
import {createMovie, createMoviesList} from '../../api/adapters/movies';
import {reducer, ActionType, Operation} from './movies';

const api = createAPI(noop, noop, noop, noop, noop);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    featuredMovie: {},
    moviesList: [],
    activeGenre: FilterSettings.INITIAL_VALUE,
    shownMoviesAmount: MAX_MOVIES_AMOUNT,
    status: 200,
  });
});

it(`Reducer should update featured movie`, () => {
  expect(reducer({
    featuredMovie: {},
  }, {
    type: ActionType.LOAD_FEATURED_MOVIE,
    payload: featuredMovie,
  })).toEqual({
    featuredMovie,
  });
});

it(`Reducer should update movies list`, () => {
  expect(reducer({
    moviesList: [],
  }, {
    type: ActionType.LOAD_MOVIES,
    payload: moviesList,
  })).toEqual({
    moviesList,
  });
});

it(`Reducer should update active genre to a given value and reset shown movies amount`, () => {
  expect(reducer({
    activeGenre: FilterSettings.INITIAL_VALUE,
    shownMoviesAmount: 20,
  }, {
    type: ActionType.SET_ACTIVE_GENRE,
    payload: `Action`,
  })).toEqual({
    activeGenre: `Action`,
    shownMoviesAmount: MAX_MOVIES_AMOUNT,
  });
});

it(`Reducer should update shown movies amount to a given value`, () => {
  expect(reducer({
    shownMoviesAmount: MAX_MOVIES_AMOUNT,
  }, {
    type: ActionType.SET_SHOWN_AMOUNT,
    payload: 12,
  })).toEqual({
    shownMoviesAmount: 20,
  });
});

it(`Reducer should update load status to a given value`, () => {
  expect(reducer({
    status: 200,
  }, {
    type: ActionType.UPDATE_STATUS,
    payload: 500,
  })).toEqual({
    status: 500,
  });
});

it(`Reducer should update movie status`, () => {
  expect(reducer({
    featuredMovie: {id: 1, isFavorite: false},
    moviesList: [{id: 1, isFavorite: false}],
  }, {
    type: ActionType.UPDATE_MOVIE_STATUS,
    payload: {
      featuredMovie: {id: 1, isFavorite: true},
      moviesList: [{id: 1, isFavorite: true}],
    },
  })).toEqual({
    featuredMovie: {id: 1, isFavorite: true},
    moviesList: [{id: 1, isFavorite: true}],
  });
});

describe(`Operation works correctly`, () => {
  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const responseMock = {fake: true};
    const dispatch = jest.fn();
    const featuredMovieLoader = Operation.loadFeaturedMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, responseMock);

    return featuredMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FEATURED_MOVIE,
          payload: createMovie(responseMock),
        });
      });
  });

  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const responseMock = [{fake: true}];
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, responseMock);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: createMoviesList(responseMock),
        });
      });
  });
});
