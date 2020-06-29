import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs';

const mocks = {
  children: [
    <div key="first-child" title="first-child" className="child-component">
      <div className="first-nested-component"/>
    </div>,
    <div key="second-child" title="second-child" className="child-component">
      <div className="second-nested-component"/>
    </div>,
    <div key="third-child" title="third-child" className="child-component">
      <div className="third-nested-component"/>
    </div>,
  ]
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should change content on tab click`, () => {
  const {children} = mocks;
  const tabs = mount(
      <Tabs>{children}</Tabs>
  );

  const secondTab = tabs.find(`li.movie-nav__item`).at(1);

  secondTab.simulate(`click`);
  expect(tabs.find(`div.second-nested-component`).length).toBe(1);
});
