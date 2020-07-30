import React from 'react';
import renderer from 'react-test-renderer';
import {featuredMovie} from '../../__test-mocks__/movies';
import VideoPlayer from './video-player';

const children = <div/>;

it(`Should render VideoPlayer component correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          movie={featuredMovie}
          progress={0}
          duration={500}
        >
          {children}
        </VideoPlayer>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
