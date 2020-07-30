import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '../../__test-mocks__/noop';
import {FavoriteButton} from './favorite-button';

it(`Should render FavoriteButton component correctly`, () => {
  const tree = renderer
    .create(
        <FavoriteButton
          id={1}
          isFavorite={false}
          onClick={noop}
          onStatusChange={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
