import React from 'react';
import MoviesList from './movies-list.jsx';
import PropTypes from "prop-types";

const MoviesListFiltered = (props) => {
  const {movies, filterCriteria, onClick} = props;
  const {title, genre} = filterCriteria;
  const filteredMovies = movies.filter((movie) => {
    return movie.title !== title && movie.genre === genre;
  });

  return <MoviesList movies={filteredMovies} onClick={onClick}/>;
};

MoviesListFiltered.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired,
  filterCriteria: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoviesListFiltered;
