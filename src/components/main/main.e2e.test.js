import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

const mocks = {
  featuredMovieTitle: `The Grand Budapest Hotel`,
  featuredMovieGenre: `Drama`,
  featuredMovieReleaseDate: 2014,
  movieTitles: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};
const onTitleClick = jest.fn();

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should render correct amount of cards`, () => {
  const main = mount(
      <Main
        featuredMovieTitle={mocks.featuredMovieTitle}
        featuredMovieGenre={mocks.featuredMovieGenre}
        featuredMovieReleaseDate={mocks.featuredMovieReleaseDate}
        movieTitles={mocks.movieTitles}
        onTitleClick={onTitleClick}
      />
  );
  const movieCards = main.find(`article.small-movie-card`).length;

  expect(movieCards).toBe(mocks.movieTitles.length);
});

it(`Should call onClick handler once for each element`, () => {
  const main = shallow(
      <Main
        featuredMovieTitle={mocks.featuredMovieTitle}
        featuredMovieGenre={mocks.featuredMovieGenre}
        featuredMovieReleaseDate={mocks.featuredMovieReleaseDate}
        movieTitles={mocks.movieTitles}
        onTitleClick={onTitleClick}
      />
  );
  const movieTitles = main.find(`h3.small-movie-card__title`);

  movieTitles.forEach((title) => {
    title.simulate(`click`);
    expect(onTitleClick).toHaveBeenCalledTimes(1);
  });
});
