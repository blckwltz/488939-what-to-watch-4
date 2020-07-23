import React from 'react';
import PropTypes from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withErrorMessages from './with-error-messages';

configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {children, onCheck, onValidityCheck} = props;

  return <form onSubmit={onValidityCheck}>
    <input type="checkbox" value="5" onChange={onCheck}/>
    {children}
  </form>;
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onCheck: PropTypes.func.isRequired,
  onValidityCheck: PropTypes.func.isRequired,
};

const MockComponentWrapped = withErrorMessages(MockComponent);

it(`HOC's onCheck callback should be called with correct data`, () => {
  const wrapper = mount(
      <MockComponentWrapped
        rating={`3`}
        text={`This is a review that is at least 50 characters long`}
        errorMessage={`Error message`}
      />
  );
  const checkbox = wrapper.find(`input`);

  checkbox.simulate(`change`, {target: {value: `5`}});
});
