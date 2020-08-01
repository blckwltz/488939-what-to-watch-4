import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withValidation from './with-validation';

configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withValidation(MockComponent);

it(`Should set correct validity`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        rating={`0`}
        text={``}
      />
  );

  expect(wrapper.props().isValid).toEqual(false);
});
