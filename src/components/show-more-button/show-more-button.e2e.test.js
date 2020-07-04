import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShowMoreButton from './show-more-button';

const list = new Array(3).fill({});
const amount = 2;
const onClick = jest.fn();

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should call onClick handler once`, () => {
  const showMoreButton = shallow(
      <ShowMoreButton
        list={list}
        amount={amount}
        onClick={onClick}
      />
  );
  const button = showMoreButton.find(`button.catalog__button`);

  button.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);
});
