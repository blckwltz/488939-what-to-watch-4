import React from 'react';
import renderer from 'react-test-renderer';
import {moviesList} from '../../__test-mocks__/movies';
import {GenresList} from './genres-list';

const onGenreClick = () => {};
const onActiveGenreChange = () => {};

it(`Should render GenresList component correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          moviesList={moviesList}
          onGenreClick={onGenreClick}
          activeGenre={`All genres`}
          onActiveGenreChange={onActiveGenreChange}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
