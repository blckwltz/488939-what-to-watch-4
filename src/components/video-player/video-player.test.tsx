import React, {ReactElement} from 'react';
import renderer from 'react-test-renderer';
import history from '../../routing/history';
import {noop} from '../../__test-mocks__/noop';
import {featuredMovie} from '../../__test-mocks__/movies';
import VideoPlayer from './video-player';

const children: ReactElement = <div/>;

it(`Should render VideoPlayer component correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          history={history}
          movie={featuredMovie}
          isPlaying={false}
          progress={0}
          duration={500}
          onPlaybackStatusChange={noop}
          onFullScreenRequest={noop}
        >
          {children}
        </VideoPlayer>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
