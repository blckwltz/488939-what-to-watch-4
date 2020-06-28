import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs';

const mocks = {
  tabLabels: [`First Tab`, `Second Tab`, `Third Tab`],
  children: [
    <div key="firstChild" className="child-component"/>,
    <div key="secondChild" className="child-component"/>,
    <div key="thirdChild" className="child-component"/>,
  ]
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should change state correctly on tab click`, () => {
  const {tabLabels, children} = mocks;
  const tabs = mount(
      <Tabs tabLabels={tabLabels}>{children}</Tabs>
  );

  const secondTab = tabs.find(`li.movie-nav__item`).at(1);

  secondTab.simulate(`click`);
  expect(tabs.state().activeTab).toEqual(tabLabels[1]);
});
