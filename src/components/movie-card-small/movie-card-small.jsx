import React from 'react';
import PropTypes from 'prop-types';
import {PLAYBACK_DELAY} from '../../utils/const.js';

const MovieCardSmall = (props) => {
  const {movieInfo, children, onPlaybackStatusChange} = props;
  const {title} = movieInfo;
  let timeout;

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image" onMouseEnter={() => {
      timeout = setTimeout(onPlaybackStatusChange, PLAYBACK_DELAY);
    }} onMouseLeave={() => {
      clearTimeout(timeout);
      onPlaybackStatusChange();
    }}>
      {children}
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{title}</a>
    </h3>
  </article>;
};

MovieCardSmall.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onPlaybackStatusChange: PropTypes.func.isRequired,
};

export default MovieCardSmall;
