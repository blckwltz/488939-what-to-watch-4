import React, {ReactElement} from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {featuredMovie} from '../../__test-mocks__/movies';
import withVideo from './with-video';

configure({
  adapter: new Adapter(),
});

interface Props {
  children: ReactElement,
  onPlaybackStatusChange: () => void,
}

const MockComponent = (props: Props) => {
  const {children, onPlaybackStatusChange} = props;

  return <div onMouseEnter={onPlaybackStatusChange} onMouseLeave={onPlaybackStatusChange}>
    {children}
  </div>;
};

const MockComponentWrapped = withVideo(MockComponent);
const playEventMock = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {return new Promise(() => {})});
const pauseEventMock = jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});

it(`HOC's callback should turn video on`, () => {
  const wrapper = mount(
      <MockComponentWrapped
        isPlaying={false}
        isMuted={true}
        isPreview={true}
        movie={featuredMovie}
      />
  );

  wrapper.find(`div`).simulate(`mouseenter`);
  expect(playEventMock).toHaveBeenCalledTimes(1);
});

it(`HOC's callback should turn video off`, () => {
  const wrapper = mount(
      <MockComponentWrapped
        isPlaying={true}
        isMuted={true}
        isPreview={true}
        movie={featuredMovie}
      />
  );

  wrapper.find(`div`).simulate(`mouseenter`);
  expect(pauseEventMock).toHaveBeenCalledTimes(1);
});
