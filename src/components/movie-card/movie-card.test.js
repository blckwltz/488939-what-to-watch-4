import React from 'react';
import renderer from 'react-test-renderer';
import {featuredMovie} from '../../mocks/films';
import {MovieCard} from './movie-card';

it(`Should render MovieCard component correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          movie={featuredMovie}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
