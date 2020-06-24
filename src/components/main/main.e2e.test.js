import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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
const onMovieClick = () => {};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should render correct amount of cards`, () => {
  const main = mount(
      <Main
        featuredMovie={featuredMovie}
        moviesList={moviesList}
        onMovieClick={onMovieClick}
      />
  );
  const movieCards = main.find(`article.small-movie-card`).length;

  expect(movieCards).toBe(moviesList.length);
});
