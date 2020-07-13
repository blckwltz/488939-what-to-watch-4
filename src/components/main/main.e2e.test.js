import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {featuredMovie, moviesList} from '../../test-mocks/movies';
import NameSpace from '../../reducer/name-space.js';
import Main from './main';

const mockStore = configureStore([]);

configure({
  adapter: new Adapter(),
});

it(`Should render correct amount of cards`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      featuredMovie,
      moviesList,
      activeGenre: `All genres`,
      shownMoviesAmount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
    }
  });

  const main = mount(
      <Provider store={store}>
        <Main/>
      </Provider>
  );
  const movieCards = main.find(`article.small-movie-card`);
  const showMoreButton = main.find(`button.catalog__button`);

  expect(movieCards.length).toBe(4);
  expect(showMoreButton.length).toBe(1);
});

it(`Should not render show more button if all cards are shown`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      featuredMovie,
      moviesList,
      activeGenre: `All genres`,
      shownMoviesAmount: 20,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
    }
  });

  const main = mount(
      <Provider store={store}>
        <Main/>
      </Provider>
  );
  const showMoreButton = main.find(`button.catalog__button`);

  expect(showMoreButton.length).toBe(0);
});
