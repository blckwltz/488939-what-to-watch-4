import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {moviesList} from '../../__test-mocks__/movies';
import MovieCardSmall from './movie-card-small';

const mocks = {
  children: <div/>,
};
const onPlaybackStatusChange = () => {};

it(`Should render MovieCardSmall component correctly`, () => {
  const {children} = mocks;
  const tree = renderer
    .create(
        <MemoryRouter>
          <MovieCardSmall
            movieInfo={moviesList[0]}
            onPlaybackStatusChange={onPlaybackStatusChange}
          >
            {children}
          </MovieCardSmall>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
