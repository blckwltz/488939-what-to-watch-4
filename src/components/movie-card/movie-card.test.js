import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

const title = `The Big Lebowski`;
const onClick = () => {};

it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          title={title}
          onClick={onClick}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
