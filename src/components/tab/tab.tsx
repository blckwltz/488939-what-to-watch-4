import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  const {children} = props;

  return <Fragment>{children}</Fragment>;
};

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
};

export default Tab;
