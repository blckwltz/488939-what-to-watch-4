import React from 'react';
import renderer from 'react-test-renderer';
import {moviesList} from '../../mocks/films';
import {GenresList} from './genres-list';

const onGenreClick = () => {};
const onActiveItemChange = () => {};

it(`Should render GenresList component correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          moviesList={moviesList}
          onGenreClick={onGenreClick}
          activeItem={0}
          onActiveItemChange={onActiveItemChange}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
