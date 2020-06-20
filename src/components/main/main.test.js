import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

const mocks = {
  featuredMovie: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: 2014,
  },
  moviesList: [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      source: `video/preview.webm`,
    },
    {
      title: `Pulp Fiction`,
      poster: `img/pulp-fiction.jpg`,
      source: `video/preview.webm`,
    },
    {
      title: `Shutter Island`,
      poster: `img/shutter-island.jpg`,
      source: `video/preview.webm`,
    },
    {
      title: `Macbeth`,
      poster: `img/macbeth.jpg`,
      source: `video/preview.webm`,
    },
    {
      title: `Snatch`,
      poster: `img/snatch.jpg`,
      source: `video/preview.webm`,
    },
    {
      title: `We need to talk about Kevin`,
      poster: `img/we-need-to-talk-about-kevin.jpg`,
      source: `video/preview.webm`,
    },
    {
      title: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
      source: `video/preview.webm`,
    },
    {
      title: `Revenant`,
      poster: `img/revenant.jpg`,
      source: `video/preview.webm`,
    },
  ],
};
const {featuredMovie, moviesList} = mocks;

it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          featuredMovie={featuredMovie}
          moviesList={moviesList}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
