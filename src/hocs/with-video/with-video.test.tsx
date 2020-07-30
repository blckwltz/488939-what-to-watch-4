import React, {ReactElement} from 'react';
import renderer from 'react-test-renderer';
import {featuredMovie} from '../../__test-mocks__/movies';
import withVideo from './with-video';

interface Props {
  children: ReactElement;
}

const MockComponent = (props: Props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
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
