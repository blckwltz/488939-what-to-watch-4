import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

const mocks = {
  isPlaying: true,
  isMuted: true,
  isAutoplayEnabled: true,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/macbeth.jpg`,
};
const createNodeMock = (element) => {
  if (element.type === `video`) {
    return {
      play() {
        return new Promise(() => {});
      },
    };
  }

  return null;
};

it(`Should render VideoPlayer component correctly`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(
        <VideoPlayer
          isPlaying={mocks.isPlaying}
          isMuted={mocks.isMuted}
          isAutoplayEnabled={mocks.isAutoplayEnabled}
          src={mocks.src}
          poster={mocks.poster}
        />,
        options
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
