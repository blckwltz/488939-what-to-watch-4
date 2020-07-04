import React from 'react';
import PropTypes from 'prop-types';

const ShowMoreButton = (props) => {
  const {list, amount, onClick} = props;

  return (amount < list.length) ? <button className="catalog__button" type="button" onClick={onClick}>Show more</button> : null;
};

ShowMoreButton.propTypes = {
  list: PropTypes.array.isRequired,
  amount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ShowMoreButton;
