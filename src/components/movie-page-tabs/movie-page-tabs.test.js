import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageTabs from './movie-page-tabs';

const mocks = {
  title: `Bohemian Rhapsody`,
  genre: `Biography, Music`,
  releaseDate: 2018,
  runTime: `2h 50m`,
  cover: `img/the-grand-budapest-hotel-poster.jpg`,
  poster: `img/bohemian-rhapsody.jpg`,
  previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: {
    score: 8.0,
    level: `Good`,
    count: 240,
  },
  description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury,
      leading up to their famous performance at Live Aid (1985).`,
  director: `Bryan Singer`,
  cast: `Rami Malek, Lucy Boynton, Gwilym Lee`,
  reviews: [
    {
      author: `Kate Muir`,
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious
          Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `2016-12-24`,
      rating: 8.7,
    },
    {
      author: `Bill Goodykoontz`,
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes
          I wish I could take back.`,
      date: `2015-11-18`,
      rating: 5.3,
    },
  ],
};

it(`Should render Tabs component correctly`, () => {
  const tree = renderer
    .create(
        <MoviePageTabs movieInfo={mocks}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
