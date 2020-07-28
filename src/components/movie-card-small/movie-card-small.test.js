import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie} from '../../__test-mocks__/movies.js';
import MovieCardSmall from './movie-card-small';

const children = <div/>;
const onPlaybackStatusChange = () => {};

it(`Should render MovieCardSmall component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <MovieCardSmall
            movie={featuredMovie}
            onPlaybackStatusChange={onPlaybackStatusChange}
          >
            {children}
          </MovieCardSmall>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
