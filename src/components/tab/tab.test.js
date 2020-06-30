import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './tab';

const mocks = {
  children: <div title="child" className="child-component"/>,
};

it(`Should render Tab component correctly`, () => {
  const {children} = mocks;
  const tree = renderer
    .create(
        <Tab>{children}</Tab>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
