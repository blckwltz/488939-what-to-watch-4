import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from './movie-page';

const mocks = {
  movieInfo: {
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
  },
  moviesList: [
    {
      title: `Macbeth`,
      genre: `Drama`,
      releaseDate: 2015,
      runTime: `2h 0m`,
      cover: `img/the-grand-budapest-hotel-poster.jpg`,
      poster: `img/macbeth.jpg`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
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
    },
    {
      title: `We need to talk about Kevin`,
      genre: `Drama`,
      releaseDate: 2011,
      runTime: `1h 40m`,
      cover: `img/the-grand-budapest-hotel-poster.jpg`,
      poster: `img/we-need-to-talk-about-kevin.jpg`,
      previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 7.5,
        level: `Good`,
        count: 134,
      },
      description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things
      he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond
      anything anyone imagined.`,
      director: `Lynne Ramsay`,
      cast: `Tilda Swinton, John C. Reilly, Ezra Miller`,
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
    }
  ],
};
const onMovieClick = () => {};

it(`Should render MoviePage component correctly`, () => {
  const {movieInfo, moviesList} = mocks;
  const tree = renderer.create(
      <MoviePage
        movieInfo={movieInfo}
        filteredList={moviesList}
        shownMoviesAmount={moviesList.length}
        onMovieClick={onMovieClick}
      />
  );

  expect(tree).toMatchSnapshot();
});
