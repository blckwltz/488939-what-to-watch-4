import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {featuredMovie, moviesList} from '../../mocks/films';
import Main from './main';

const mockStore = configureStore([]);

it(`Should render Main component correctly`, () => {
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
        <Main/>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
