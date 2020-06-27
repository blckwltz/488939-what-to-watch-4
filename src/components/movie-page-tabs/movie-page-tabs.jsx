import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TAB_TYPES} from '../../const.js';

export default class MoviePageTabs extends PureComponent {
  constructor(props) {
    super(props);

    this._handleTabClick = this._handleTabClick.bind(this);
    this._renderContent = () => {
      return null;
    };
    this.state = {
      tabStatus: [false, false, false],
    };
  }

  componentDidMount() {
    this._handleTabClick(`Overview`, 0);
  }

  _handleTabClick(type, index) {
    const {tabStatus} = this.state;
    const newStatus = tabStatus.map((it) => {
      it = false;
      return it;
    });

    newStatus[index] = true;
    this.setState({
      tabStatus: newStatus,
    });

    switch (type) {
      case `Overview`:
        this._renderContent = () => {
          return this._renderOverview();
        };
        break;
      case `Details`:
        this._renderContent = () => {
          return this._renderDetails();
        };
        break;
      case `Reviews`:
        this._renderContent = () => {
          return this._renderReviews();
        };
        break;
      default:
        this._renderContent = () => {
          return null;
        };
    }
  }

  _renderOverview() {
    const {movieInfo} = this.props;
    const {rating, description, director, cast} = movieInfo;
    const {score, level, count} = rating;

    return <Fragment>
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
    </Fragment>;
  }

  _renderDetails() {
    const {movieInfo} = this.props;
    const {genre, releaseDate, runTime, director, cast} = movieInfo;

    return <div className="movie-card__text movie-card__row">
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
    </div>;
  }

  _renderReviews() {
    const {movieInfo} = this.props;
    const {reviews} = movieInfo;

    return <div className="movie-card__reviews movie-card__row">
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
    </div>;
  }

  render() {
    const {tabStatus} = this.state;

    return <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TAB_TYPES.map((type, index) => {
            return <li key={`${type}-${index}`} className={`movie-nav__item ${tabStatus[index] && `movie-nav__item--active`}`} onClick={() => {
              this._handleTabClick(type, index);
            }}>
              <a href="#" className="movie-nav__link">{type}</a>
            </li>;
          })}
        </ul>
      </nav>
      {this._renderContent()}
    </div>;
  }
}

MoviePageTabs.propTypes = {
  movieInfo: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    runTime: PropTypes.string.isRequired,
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
};
