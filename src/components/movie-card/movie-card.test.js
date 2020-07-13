import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {featuredMovie} from '../../test-mocks/movies';
import NameSpace from '../../reducer/name-space.js';
import {MovieCard} from './movie-card';

const mockStore = configureStore([]);

it(`Should render MovieCard component correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieCard
            movie={featuredMovie}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
