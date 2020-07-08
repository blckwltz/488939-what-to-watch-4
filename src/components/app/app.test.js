import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {featuredMovie, moviesList} from '../../mocks/films';
import {App} from './app';

const mockStore = configureStore([]);

it(`Should render App component correctly`, () => {
  const store = mockStore({
    featuredMovie,
    moviesList,
    filteredList: moviesList,
    activeGenre: `All genres`,
    shownMoviesAmount: 8,
  });

  const tree = renderer
    .create((
      <Provider store={store}>
        <App
          moviesList={moviesList}
        />
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
