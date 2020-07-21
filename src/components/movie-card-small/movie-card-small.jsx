import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {PLAYBACK_DELAY} from '../../utils/const.js';
import {AppRoute} from '../../routing/route.js';

const MovieCardSmall = (props) => {
  const {movieInfo, children, onPlaybackStatusChange} = props;
  const {id, title} = movieInfo;
  let timeout;

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image" onMouseEnter={() => {
      timeout = setTimeout(onPlaybackStatusChange, PLAYBACK_DELAY);
    }} onMouseLeave={() => {
      clearTimeout(timeout);
      onPlaybackStatusChange();
    }}>
      <Link to={`${AppRoute.MOVIE}/${id}`}>{children}</Link>
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${AppRoute.MOVIE}/${id}`} className="small-movie-card__link">{title}</Link>
    </h3>
  </article>;
};

MovieCardSmall.propTypes = {
  movieInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onPlaybackStatusChange: PropTypes.func.isRequired,
};

export default MovieCardSmall;
