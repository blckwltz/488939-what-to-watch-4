import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie} from '../../__test-mocks__/movies';
import NameSpace from '../../store/name-space';
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
          <MemoryRouter>
            <MovieCard
              movie={featuredMovie}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
