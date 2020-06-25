import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';

const mocks = {
  isPlaying: false,
  isMuted: true,
  isAutoplayEnabled: true,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/revenant.jpg`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should change state on video play and pause`, () => {
  const {isPlaying, isMuted, isAutoplayEnabled, src, poster} = mocks;
  const videoPlayer = mount(
      <VideoPlayer
        isPlaying={isPlaying}
        isMuted={isMuted}
        isAutoplayEnabled={isAutoplayEnabled}
        src={src}
        poster={poster}
      />
  );
  const video = videoPlayer.find(`video`);

  video.simulate(`play`);
  expect(videoPlayer.state().isPlaying).toEqual(true);

  video.simulate(`pause`);
  expect(videoPlayer.state().isPlaying).toEqual(false);
});
