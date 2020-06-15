import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

const Settings = {
  NAME: `The Big Lebowski`,
  ON_CLICK: () => {},
};

it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          name={Settings.NAME}
          onClick={Settings.ON_CLICK}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
