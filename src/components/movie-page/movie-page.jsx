import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {TabNames} from '../../const.js';
import MoviesList from '../movies-list/movies-list.jsx';
import Tabs from '../tabs/tabs.jsx';
import Tab from '../tab/tab.jsx';

const MoviePage = (props) => {
  const {movieInfo, filteredList, shownMoviesAmount, onMovieClick} = props;
  const {title, genre, releaseDate, cover, poster, rating, description, runTime, director, cast, reviews} = movieInfo;
  const {score, level, count} = rating;

  return <Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={poster} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={cover} alt={title} width="218"
              height="327"/>
          </div>

          <Tabs>
            <Tab title={TabNames.OVERVIEW}>
              <div className="movie-rating">
                <div className="movie-rating__score">{score}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{level}</span>
                  <span className="movie-rating__count">{count} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                <p>{description}</p>

                <p className="movie-card__director"><strong>Director: {director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {cast} and other</strong></p>
              </div>
            </Tab>
            <Tab title={TabNames.DETAILS}>
              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">{cast}</span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{runTime}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{genre}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{releaseDate}</span>
                  </p>
                </div>
              </div>
            </Tab>
            <Tab title={TabNames.REVIEWS}>
              <div className="movie-card__reviews movie-card__row">
                <div className="movie-card__reviews-col">
                  {reviews.map((review) => <div key={review.author} className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">{review.text}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.author}</cite>
                        <time className="review__date" dateTime={review.date}>{review.date}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{review.rating}</div>
                  </div>)}
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MoviesList movies={filteredList} amount={shownMoviesAmount} onClick={onMovieClick}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </Fragment>;
};

MoviePage.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    runTime: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    cast: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          author: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          rating: PropTypes.number.isRequired,
        })
    ).isRequired,
  }).isRequired,
  filteredList: PropTypes.array.isRequired,
  shownMoviesAmount: PropTypes.number.isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MoviePage;
