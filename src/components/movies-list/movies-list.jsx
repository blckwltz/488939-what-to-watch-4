import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = (props) => {
  const {movies, amount, onClick} = props;
  const moviesToShow = movies.slice(0, amount);

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie, index) => <MovieCard key={`${movie.title}-${index}`} movieInfo={movie} onClick={(evt) => {
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
  amount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MoviesList;
