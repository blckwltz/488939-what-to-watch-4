import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../routing/route.js';
import {getFeaturedMovie} from '../../store/movies/selectors.js';
import withStatus from '../../hocs/with-status/with-status.jsx';
import UserBlock from '../user-block/user-block.jsx';
import FavoriteButton from '../favorite-button/favorite-button.jsx';

const FavoriteButtonWrapped = withStatus(FavoriteButton);

const MovieCard = (props) => {
  const {movie} = props;
  const {id, isFavorite, title, genre, releaseDate, cover, backgroundImage, backgroundColor} = movie;

  return <section className="movie-card" style={{background: backgroundColor}}>
    <div className="movie-card__bg">
      <img src={backgroundImage} alt={title}/>
    </div>

    <h1 className="visually-hidden">WTW</h1>

    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <UserBlock/>
    </header>

    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={cover} alt={title} width="218"
            height="327"/>
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__year">{releaseDate}</span>
          </p>

          <div className="movie-card__buttons">
            <Link to={`${AppRoute.PLAYER}/${id}`} className="btn btn--play movie-card__button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </Link>
            <FavoriteButtonWrapped id={id} isFavorite={isFavorite}/>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.number,
    cover: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  movie: getFeaturedMovie(state),
});

export {MovieCard};
export default connect(mapStateToProps)(MovieCard);
