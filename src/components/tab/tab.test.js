import React from 'react';
import renderer from 'react-test-renderer';
import Tab from './tab';

const mocks = {
  activeTab: `Overview`,
  tabLabel: `Details`,
  onClick: () => {},
};

it(`Should render Tab component correctly`, () => {
  const {activeTab, tabLabel, onClick} = mocks;
  const tree = renderer
    .create(
        <Tab
          activeTab={activeTab}
          tabLabel={tabLabel}
          onClick={onClick}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
