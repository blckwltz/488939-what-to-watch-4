import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {featuredMovie, moviesList} from '../../test-mocks/movies.js';
import {reviews} from '../../test-mocks/reviews.js';
import NameSpace from '../../reducer/name-space.js';
import MoviePage from './movie-page';

const mockStore = configureStore([]);

it(`Should render MoviePage component correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      featuredMovie,
      moviesList,
      activeGenre: `All genres`,
      shownMoviesAmount: 8,
    },
    [NameSpace.REVIEWS]: {
      reviews
    },
  });
  const tree = renderer
    .create((
      <Provider store={store}>
        <MoviePage/>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    });

  expect(tree).toMatchSnapshot();
});
