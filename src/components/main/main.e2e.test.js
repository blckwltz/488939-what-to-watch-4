import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie, moviesList} from '../../__test-mocks__/movies';
import NameSpace from '../../store/name-space';
import {Main} from './main';

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
        <MemoryRouter>
          <Main
            moviesList={moviesList}
            shownMoviesAmount={4}
          />
        </MemoryRouter>
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
        <MemoryRouter>
          <Main
            moviesList={moviesList}
            shownMoviesAmount={20}
          />
        </MemoryRouter>
      </Provider>
  );
  const showMoreButton = main.find(`button.catalog__button`);

  expect(showMoreButton.length).toBe(0);
});
