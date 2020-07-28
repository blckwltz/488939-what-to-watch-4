import React from 'react';
import PropTypes from 'prop-types';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import withVideo from '../../hocs/with-video/with-video.jsx';
import MovieCardSmall from '../movie-card-small/movie-card-small.jsx';

const MovieCardSmallWrapped = withVideo(withActiveItem(MovieCardSmall));

const MoviesList = (props) => {
  const {movies, amount} = props;
  const moviesToShow = amount ? movies.slice(0, amount) : movies;

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie) => {
      const {id} = movie;

      return <MovieCardSmallWrapped key={id} movie={movie} isPreview={true} isMuted={true}/>;
    })}
  </div>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  amount: PropTypes.number,
};

export default MoviesList;
