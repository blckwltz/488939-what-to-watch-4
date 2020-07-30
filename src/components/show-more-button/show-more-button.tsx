import React from 'react';
import {connect} from 'react-redux';
import {getShownMoviesAmount, getFilteredList} from '../../store/movies/selectors';
import {ActionCreator} from '../../store/movies/movies';

interface Props {
  list: [],
  amount: number,
  onClick: () => void,
}

const ShowMoreButton = (props: Props) => {
  const {list, amount, onClick} = props;

  return (amount < list.length) ? <button className="catalog__button" type="button" onClick={onClick}>Show more</button> : null;
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
