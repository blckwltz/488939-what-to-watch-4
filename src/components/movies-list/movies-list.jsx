import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = (props) => {
  const {movies, onClick} = props;

  return <div className="catalog__movies-list">
    {movies.map((movie) => <MovieCard key={movie.title} movieInfo={movie} onClick={(evt) => {
      evt.preventDefault();
      onClick(movie);
    }}/>)}
  </div>;
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoviesList;
