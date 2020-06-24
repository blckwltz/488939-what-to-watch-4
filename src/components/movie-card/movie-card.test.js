import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

const mocks = {
  title: `The Big Lebowski`,
  poster: `img/what-we-do-in-the-shadows.jpg`,
};
const onClick = () => {};
const onHover = () => {};
const onSettle = () => {};

it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard
          movieInfo={mocks}
          onClick={onClick}
          onHover={onHover}
          onSettle={onSettle}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
