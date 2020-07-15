import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/movies/movies.js';
import {getMoviesList} from '../../reducer/movies/selectors.js';
import {getGenresList} from '../../utils/utils.js';

const GenresList = (props) => {
  const {moviesList, activeItem, onActiveItemChange, onGenreClick} = props;
  const genresList = getGenresList(moviesList);

  return <ul className="catalog__genres-list">
    {genresList.map((genre, index) => {
      return <li key={`${genre}-${index}`} className={`catalog__genres-item ${(activeItem === index) ? `catalog__genres-item--active` : ``}`} onClick={() => {
        onActiveItemChange(index);
        onGenreClick(genre);
      }}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>;
    })}
  </ul>;
};

GenresList.propTypes = {
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        genre: PropTypes.string.isRequired,
      })
  ).isRequired,
  activeItem: PropTypes.number.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  moviesList: getMoviesList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.getFilteredList(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
