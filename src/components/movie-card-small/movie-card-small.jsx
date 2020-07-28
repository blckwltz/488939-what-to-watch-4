import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {PLAYBACK_DELAY} from '../../utils/const.js';
import {AppRoute} from '../../routing/route.js';

const MovieCardSmall = (props) => {
  const {movie, children, activeItem, onActiveItemChange, onPlaybackStatusChange} = props;
  const {id, title, poster} = movie;
  let timeout;

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image" onMouseEnter={() => {
      timeout = setTimeout(() => {
        onActiveItemChange(1);
        onPlaybackStatusChange();
      }, PLAYBACK_DELAY);
    }} onMouseLeave={() => {
      clearTimeout(timeout);
      onActiveItemChange(0);
    }}>
      <Link to={`${AppRoute.MOVIE}/${id}`}>{activeItem ? children : <img src={poster} alt={title} width="280" height="175"/>}</Link>
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${AppRoute.MOVIE}/${id}`} className="small-movie-card__link">{title}</Link>
    </h3>
  </article>;
};

MovieCardSmall.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  activeItem: PropTypes.number,
  onActiveItemChange: PropTypes.func,
  onPlaybackStatusChange: PropTypes.func,
};

export default MovieCardSmall;
