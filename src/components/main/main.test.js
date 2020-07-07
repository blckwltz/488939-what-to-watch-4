import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Main from './main';

const mockStore = configureStore([]);

const mocks = {
  featuredMovie: {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: 2014,
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
    },
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      genre: `Adventure`,
      releaseDate: 2018,
      runTime: `3h 5m`,
      cover: `img/the-grand-budapest-hotel-poster.jpg`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: {
        score: 6.6,
        level: `Average`,
        count: 300,
      },
      description: `The second installment of the "Fantastic Beasts" series featuring the adventures
      of Magizoologist Newt Scamander.`,
      director: `David Yates`,
      cast: `Eddie Redmayne, Katherine Waterston, Dan Fogler`,
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
      title: `Shutter Island`,
      genre: `Mystery`,
      releaseDate: 2010,
      runTime: `2h 34m`,
      cover: `img/the-grand-budapest-hotel-poster.jpg`,
      poster: `img/shutter-island.jpg`,
      previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.1,
        level: `Good`,
        count: 257,
      },
      description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital
      for the criminally insane.`,
      director: `Martin Scorsese`,
      cast: `Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo`,
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
        level: `Good`,
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
      title: `Pulp Fiction`,
      genre: `Drama`,
      releaseDate: 1994,
      runTime: `2h 10m`,
      cover: `img/the-grand-budapest-hotel-poster.jpg`,
      poster: `img/pulp-fiction.jpg`,
      previewSrc: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      rating: {
        score: 8.9,
        level: `Very Good`,
        count: 578,
      },
      description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits
      intertwine in four tales of violence and redemption.`,
      director: `Quentin Tarantino`,
      cast: `John Travolta, Uma Thurman, Samuel L. Jackson`,
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
      title: `Revenant`,
      genre: `Adventure`,
      releaseDate: 2015,
      runTime: `2h 0m`,
      cover: `img/the-grand-budapest-hotel-poster.jpg`,
      poster: `img/revenant.jpg`,
      previewSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      rating: {
        score: 8.0,
        level: `Good`,
        count: 1001,
      },
      description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being
      mauled by a bear and left for dead by members of his own hunting team.`,
      director: `Alejandro G. Iñárritu`,
      cast: `Leonardo DiCaprio, Tom Hardy, Will Poulter`,
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
      title: `Bohemian Rhapsody`,
      genre: `Biography`,
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
  ],
};
const {featuredMovie, moviesList} = mocks;
const onMovieClick = () => {};

it(`Should render Main component correctly`, () => {
  const store = mockStore();
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            featuredMovie={featuredMovie}
            moviesList={moviesList}
            filteredList={moviesList}
            shownMoviesAmount={moviesList.length}
            onMovieClick={onMovieClick}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
