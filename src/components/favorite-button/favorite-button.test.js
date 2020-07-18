import React from 'react';
import renderer from 'react-test-renderer';
import {FavoriteButton} from './favorite-button';

const onClick = () => {};
const onStatusChange = () => {};

it(`Should render FavoriteButton component correctly`, () => {
  const tree = renderer
    .create(
        <FavoriteButton
          onClick={onClick}
          onStatusChange={onStatusChange}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
