import React from 'react';
import renderer from 'react-test-renderer';
import {moviesList} from '../../__test-mocks__/movies';
import {noop} from '../../__test-mocks__/noop';
import {GenresList} from './genres-list';

it(`Should render GenresList component correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          moviesList={moviesList}
          onGenreClick={noop}
          activeGenre={`All genres`}
          onActiveGenreChange={noop}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
