import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

const mocks = {
  title: `The Big Lebowski`,
  poster: `img/what-we-do-in-the-shadows.jpg`,
  previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};
const onClick = () => {};
const onHover = () => {};
const onSettle = () => {};

it(`Should render MovieCard component correctly`, () => {
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
