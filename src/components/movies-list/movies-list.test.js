import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {moviesList} from '../../__test-mocks__/movies';
import MoviesList from './movies-list';

it(`Should render MoviesList component correctly`, () => {
  const tree = renderer
    .create((
      <MemoryRouter>
        <MoviesList
          movies={moviesList}
          amount={moviesList.length}
        />
      </MemoryRouter>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
