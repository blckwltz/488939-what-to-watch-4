import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list';

const mocks = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Pulp Fiction`,
    poster: `img/pulp-fiction.jpg`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Shutter Island`,
    poster: `img/shutter-island.jpg`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Macbeth`,
    poster: `img/macbeth.jpg`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Snatch`,
    poster: `img/snatch.jpg`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `We need to talk about Kevin`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Bohemian Rhapsody`,
    poster: `img/bohemian-rhapsody.jpg`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Revenant`,
    poster: `img/revenant.jpg`,
    previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];
const onClick = () => {};

it(`Should render MoviesList component correctly`, () => {
  const tree = renderer
    .create(
        <MoviesList
          movies={mocks}
          onClick={onClick}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
