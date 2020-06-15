import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const Settings = {
  MOVIE_NAME: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  RELEASE_DATE: 2014,
  MOVIES_NAMES: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  ON_TITLE_CLICK: () => {},
};

it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <App
          movieName={Settings.MOVIE_NAME}
          movieGenre={Settings.MOVIE_GENRE}
          releaseDate={Settings.RELEASE_DATE}
          moviesNames={Settings.MOVIES_NAMES}
          onTitleClick={Settings.ON_TITLE_CLICK}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
