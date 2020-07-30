import React from 'react';
import renderer from 'react-test-renderer';
import history from '../../routing/history';
import {featuredMovie} from '../../__test-mocks__/movies';
import VideoPlayer from './video-player';

const children = <div/>;
const onPlaybackStatusChange = () => {};
const onFullScreenRequest = () => {};

it(`Should render VideoPlayer component correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          history={history}
          movie={featuredMovie}
          isPlaying={false}
          progress={0}
          duration={500}
          onPlaybackStatusChange={onPlaybackStatusChange}
          onFullScreenRequest={onFullScreenRequest}
        >
          {children}
        </VideoPlayer>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
