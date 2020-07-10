import React from 'react';
import renderer from 'react-test-renderer';
import {moviesList} from '../../mocks/films';
import MovieCardSmall from './movie-card-small';

const mocks = {
  children: <div/>,
};
const onPlaybackStatusChange = () => {};

it(`Should render MovieCardSmall component correctly`, () => {
  const {children} = mocks;
  const tree = renderer
    .create(
        <MovieCardSmall
          movieInfo={moviesList[0]}
          onPlaybackStatusChange={onPlaybackStatusChange}
        >
          {children}
        </MovieCardSmall>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
