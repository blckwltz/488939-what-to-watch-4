import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = (props) => {
  const {movies, filter, onClick} = props;

  const filteredMovies = movies.filter((movie) => {
    return filter ? movie.genre === filter : movie;
  });

  return <div className="catalog__movies-list">
    {filteredMovies.map((movie, index) => <MovieCard key={`${movie.title}-${index}`} movieInfo={movie} onClick={(evt) => {
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
  filter: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default MoviesList;
