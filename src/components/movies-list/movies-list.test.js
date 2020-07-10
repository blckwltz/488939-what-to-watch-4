import React from 'react';
import renderer from 'react-test-renderer';
import {moviesList} from '../../mocks/films';
import {MoviesList} from './movies-list';

it(`Should render MoviesList component correctly`, () => {
  const tree = renderer
    .create((
      <MoviesList
        movies={moviesList}
        amount={moviesList.length}
      />
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
