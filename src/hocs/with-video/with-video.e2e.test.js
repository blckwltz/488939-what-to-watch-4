import React from 'react';
import PropTypes from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {featuredMovie} from '../../__test-mocks__/movies.js';
import withVideo from './with-video';

configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {children, onPlaybackStatusChange} = props;

  return <div onMouseEnter={onPlaybackStatusChange} onMouseLeave={onPlaybackStatusChange}>
    {children}
  </div>;
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onPlaybackStatusChange: PropTypes.func.isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);
const playEventMock = jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
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
