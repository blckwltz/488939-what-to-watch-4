import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs';

const mocks = {
  tabLabels: [`Overview`],
  children: [<div key="child" className="child-component"/>]
};

it(`Should render Tabs component correctly`, () => {
  const {tabLabels, children} = mocks;
  const tree = renderer
    .create(
        <Tabs tabLabels={tabLabels}>{children}</Tabs>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
