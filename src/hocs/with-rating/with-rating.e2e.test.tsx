import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withRating from './with-rating';

configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withRating(MockComponent);

it(`Should change and validate rating`, () => {
  const wrapper = shallow(
      <MockComponentWrapped/>
  );

  expect(wrapper.props().rating).toEqual(`0`);
  expect(wrapper.props().isRatingValid).toEqual(false);
  wrapper.props().onRatingChange({target: {value: `5`}});
  expect(wrapper.props().rating).toEqual(`5`);
  expect(wrapper.props().isRatingValid).toEqual(true);
});
