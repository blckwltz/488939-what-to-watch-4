import React from 'react';
import PropTypes from 'prop-types';
import withVideo from '../../hocs/with-video/with-video.jsx';
import MovieCardSmall from '../movie-card-small/movie-card-small.jsx';

const MovieCardSmallWrapped = withVideo(MovieCardSmall);

const MoviesList = (props) => {
  const {movies, amount} = props;
  const moviesToShow = amount ? movies.slice(0, amount) : movies;

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie) => {
      const {id, poster, previewSrc} = movie;

      return <MovieCardSmallWrapped key={id} movieInfo={movie} isPlaying={false} isMuted={true} src={previewSrc} poster={poster}/>;
    })}
  </div>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    poster: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
  })).isRequired,
  amount: PropTypes.number,
};

export default MoviesList;
