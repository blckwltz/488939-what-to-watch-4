import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withStatus from './with-status';

configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div/>;
const MockComponentWrapped = withStatus(MockComponent);

it(`HOC's callback should change status`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        isFavorite={true}
      />
  );

  expect(wrapper.props().isFavorite).toEqual(true);
  wrapper.props().onStatusChange();
  expect(wrapper.props().isFavorite).toEqual(false);
});
