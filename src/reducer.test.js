import {featuredMovie, moviesList} from './mocks/films';
import {reducer, ActionType} from './reducer.js';

const shownMoviesAmount = 8;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    featuredMovie,
    moviesList,
    filteredList: moviesList,
    activeGenre: `All genres`,
    shownMoviesAmount,
  });
});

it(`Reducer should filter movies list and update active genre to a given value`, () => {
  expect(reducer({
    moviesList,
    filteredList: moviesList,
    activeGenre: `All genres`,
    shownMoviesAmount: 16,
  }, {
    type: ActionType.SET_ACTIVE_GENRE,
    payload: `Comedy`,
  })).toEqual({
    moviesList,
    filteredList: [{
      title: `Snatch`,
      genre: `Comedy`,
      releaseDate: 2000,
      runTime: `1h 47m`,
      cover: `img/the-grand-budapest-hotel-poster.jpg`,
      poster: `img/snatch.jpg`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: {
        score: 8.3,
        count: 300,
      },
      description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers
      and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
      director: `Guy Ritchie`,
      cast: `Jason Statham, Brad Pitt, Benicio Del Toro`,
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
      title: `Snatch`,
      genre: `Comedy`,
      releaseDate: 2000,
      runTime: `1h 47m`,
      cover: `img/the-grand-budapest-hotel-poster.jpg`,
      poster: `img/snatch.jpg`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: {
        score: 8.3,
        count: 300,
      },
      description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers
      and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
      director: `Guy Ritchie`,
      cast: `Jason Statham, Brad Pitt, Benicio Del Toro`,
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
    }],
    activeGenre: `Comedy`,
    shownMoviesAmount,
  });
});

it(`Reducer should increase shown movies amount by a given value`, () => {
  expect(reducer({
    shownMoviesAmount,
  }, {
    type: ActionType.SET_SHOWN_AMOUNT,
    payload: 2,
  })).toEqual({
    shownMoviesAmount: 10,
  });
});
