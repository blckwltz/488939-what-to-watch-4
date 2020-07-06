import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list';

const mocks = [
  {
    title: `Macbeth`,
    genre: `Drama`,
  },
  {
    title: `We need to talk about Kevin`,
    genre: `Drama`,
  },
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Adventure`,
  },
  {
    title: `Shutter Island`,
    genre: `Mystery`,
  },
  {
    title: `Snatch`,
    genre: `Comedy`,
  }
];
const onClick = () => {};

it(`Should render GenresList component correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          moviesList={mocks}
          onClick={onClick}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
