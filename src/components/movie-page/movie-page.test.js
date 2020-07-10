import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {featuredMovie, moviesList} from '../../mocks/films';
import MoviePage from './movie-page';

const mockStore = configureStore([]);

it(`Should render MoviePage component correctly`, () => {
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
        <MoviePage
          movieInfo={moviesList[0]}
        />
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    });

  expect(tree).toMatchSnapshot();
});
