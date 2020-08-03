import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withTextInput from './with-text-input';

configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withTextInput(MockComponent);

it(`Should change and validate text`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.props().text).toEqual(``);
  expect(wrapper.props().isTextValid).toEqual(false);
  wrapper.props().onTextInput({target: {value: `This is a review that is at least 50 characters long`}});
  expect(wrapper.props().text).toEqual(`This is a review that is at least 50 characters long`);
  expect(wrapper.props().isTextValid).toEqual(true);
});
