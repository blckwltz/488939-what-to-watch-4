import React, {ReactElement} from 'react';
import renderer from 'react-test-renderer';
import {noop} from '../../__test-mocks__/noop';
import Tabs from './tabs';


const children: ReactElement[] = [
  <div key="child" title="child" className="child-component">
    <div className="nested-component"/>
  </div>
];

it(`Should render Tabs component correctly`, () => {
  const tree = renderer
    .create(
        <Tabs
          activeItem={0}
          onActiveItemChange={noop}
        >
          {children}
        </Tabs>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
