import React from 'react';
import renderer from 'react-test-renderer';
import {noop} from '../../__test-mocks__/noop';
import {ShowMoreButton} from './show-more-button';

const list = new Array(3).fill({});
const amount = 2;

it(`Should render ShowMoreButton component correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          list={list}
          amount={amount}
          onClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
