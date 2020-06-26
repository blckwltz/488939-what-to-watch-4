import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page';

const mocks = {
  title: `Macbeth`,
  genre: `Drama`,
  releaseDate: 2015,
  cover: `img/the-grand-budapest-hotel-poster.jpg`,
  poster: `img/macbeth.jpg`,
  rating: {
    score: 6.6,
    level: `Average`,
    count: 120,
  },
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will
      become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king
      and takes the throne for himself.`,
  director: `Justin Kurzel`,
  cast: `Michael Fassbender, Marion Cotillard, Jack Madigan`,
};

it(`Should render MoviePage component correctly`, () => {
  const tree = renderer.create(
      <MoviePage movieInfo={mocks}/>
  );

  expect(tree).toMatchSnapshot();
});
