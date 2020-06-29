import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs';

const mocks = {
  children: [<div key="child" title="child" className="child-component">
    <div className="nested-component"/>
  </div>],
};

it(`Should render Tabs component correctly`, () => {
  const {children} = mocks;
  const tree = renderer
    .create(
        <Tabs>{children}</Tabs>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
