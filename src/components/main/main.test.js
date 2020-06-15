import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

const Settings = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: 2014,
  MOVIES_NAMES: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  ON_TITLE_CLICK: () => {},
};

it(`Should render correctly`, () => {
  const tree = renderer
    .create(
        <Main
          name={Settings.NAME}
          genre={Settings.GENRE}
          date={Settings.DATE}
          moviesNames={Settings.MOVIES_NAMES}
          onTitleClick={Settings.ON_TITLE_CLICK}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
