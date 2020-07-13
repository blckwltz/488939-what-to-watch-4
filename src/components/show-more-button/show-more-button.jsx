import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getShownMoviesAmount, getFilteredList} from '../../reducer/movies/selectors.js';
import {ActionCreator} from '../../reducer/movies/movies.js';

const ShowMoreButton = (props) => {
  const {list, amount, onClick} = props;

  return (amount < list.length) ? <button className="catalog__button" type="button" onClick={onClick}>Show more</button> : null;
};

ShowMoreButton.propTypes = {
  list: PropTypes.array.isRequired,
  amount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  list: getFilteredList(state),
  amount: getShownMoviesAmount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.setShownAmount());
  },
});

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
