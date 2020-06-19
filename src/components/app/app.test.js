import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const mocks = {
  featuredMovieTitle: `The Grand Budapest Hotel`,
  featuredMovieGenre: `Drama`,
  featuredMovieReleaseDate: 2014,
  movieTitles: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};
const onTitleClick = () => {};

it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <App
          featuredMovieTitle={mocks.featuredMovieTitle}
          featuredMovieGenre={mocks.featuredMovieGenre}
          featuredMovieReleaseDate={mocks.featuredMovieReleaseDate}
          movieTitles={mocks.movieTitles}
          onTitleClick={onTitleClick}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
