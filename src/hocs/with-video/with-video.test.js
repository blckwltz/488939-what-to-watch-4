import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import {featuredMovie} from '../../__test-mocks__/movies';
import withVideo from './with-video';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

it(`Should render withVideo correctly`, () => {
  const tree = renderer
    .create((
      <MockComponentWrapped
        isPlaying={false}
        isMuted={true}
        isPreview={true}
        movie={featuredMovie}
      />
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
