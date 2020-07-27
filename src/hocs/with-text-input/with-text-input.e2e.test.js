import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withTextInput from './with-text-input';

configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withTextInput(MockComponent);

it(`Should change text`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.props().text).toEqual(``);
  wrapper.props().onTextInput({target: {value: `Some text`}});
  expect(wrapper.props().text).toEqual(`Some text`);
});
