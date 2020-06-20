import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {title, poster, onClick, onHover, onSettle} = props;

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image" onMouseEnter={() => {
      onHover(props);
    }} onMouseLeave={onSettle}>
      <img src={poster} alt={title} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title" onClick={onClick}>
      <a className="small-movie-card__link" href="movie-page.html">{title}</a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  onSettle: PropTypes.func.isRequired,
};

export default MovieCard;
