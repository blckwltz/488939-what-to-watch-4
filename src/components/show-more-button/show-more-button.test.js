import React from 'react';
import renderer from 'react-test-renderer';
import {ShowMoreButton} from './show-more-button';

const list = new Array(3).fill({});
const amount = 2;
const onClick = () => {};

it(`Should render ShowMoreButton component correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          list={list}
          amount={amount}
          onClick={onClick}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
