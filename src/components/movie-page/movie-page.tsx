import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Movie} from '../../types/movie';
import {Review} from '../../types/review';
import {Match} from '../../types/match';
import {Operation as ReviewsOperation} from '../../store/reviews/reviews';
import {getMoviesList} from '../../store/movies/selectors';
import {getReviews} from '../../store/reviews/selectors';
import {MAX_SIMILAR_MOVIES_AMOUNT, TabNames} from '../../utils/const';
import {getRatingLevel, formatDate, formatTime} from '../../utils/utils';
import {AppRoute} from '../../routing/route';
import withStatus from '../../hocs/with-status/with-status';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import FavoriteButton from '../favorite-button/favorite-button';
import MoviesList from '../movies-list/movies-list';
import UserBlock from '../user-block/user-block';
import Tabs from '../tabs/tabs';
import Tab from '../tab/tab';

interface Props {
  match: Match;
  moviesList: Movie[];
  movie: Movie;
  reviews: Review[];
  onLoad: (number) => void;
}

const FavoriteButtonWrapped = withStatus(FavoriteButton);
const TabsWrapped = withActiveItem(Tabs);

class MoviePage extends PureComponent<Props> {
  constructor(props) {
    super(props);

    this._handleReviewsLoad = this._handleReviewsLoad.bind(this);
  }

  _handleReviewsLoad() {
    const {match, onLoad} = this.props;
    const id = Number(match.params.id);

    onLoad(id);
  }

  componentDidMount() {
    this._handleReviewsLoad();
  }

  componentDidUpdate(prevProps) {
    const {match: prevMatch} = prevProps;
    const prevId = Number(prevMatch.params.id);
    const {match} = this.props;
    const id = Number(match.params.id);

    if (id !== prevId) {
      this._handleReviewsLoad();
    }
  }

  render() {
    const {match, moviesList, movie, reviews} = this.props;
    const id = Number(match.params.id);

    if (!movie) {
      return null;
    }

    const {isFavorite, title, genre, releaseDate, cover, backgroundImage, backgroundColor, rating, description, runTime, director, cast} = movie;
    const {score, count} = rating;
    const similarMoviesList = moviesList.filter((item) => {
      return item.genre === genre && item.title !== title;
    });

    return <Fragment>
      <section className="movie-card movie-card--full" style={{background: backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={AppRoute.ROOT} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock/>
          </header>

          <div className="movie-card__wrap">
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
                <Link to={`${AppRoute.MOVIE}/${id}/review`} className="btn movie-card__button">Add review</Link>
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

            <TabsWrapped activeItem={0}>
              <Tab title={TabNames.OVERVIEW}>
                <div className="movie-rating">
                  <div className="movie-rating__score">{score}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{getRatingLevel(score)}</span>
                    <span className="movie-rating__count">{count} ratings</span>
                  </p>
                </div>

                <div className="movie-card__text">
                  <p>{description}</p>

                  <p className="movie-card__director"><strong>Director: {director}</strong></p>

                  <p className="movie-card__starring"><strong>Starring: {cast.join(`, `)} and other</strong></p>
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
                      <span className="movie-card__details-value">{cast.join(`, `)}</span>
                    </p>
                  </div>

                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Run Time</strong>
                      <span className="movie-card__details-value">{formatTime(runTime)}</span>
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
                    {reviews.map((review) => {
                      const {id: reviewId, author, text, date, rating: reviewRating} = review;
                      const {name} = author;

                      return <div key={reviewId} className="review">
                        <blockquote className="review__quote">
                          <p className="review__text">{text}</p>

                          <footer className="review__details">
                            <cite className="review__author">{name}</cite>
                            <time className="review__date" dateTime={date}>{formatDate(date)}</time>
                          </footer>
                        </blockquote>

                        <div className="review__rating">{reviewRating}</div>
                      </div>;
                    })}
                  </div>
                </div>
              </Tab>
            </TabsWrapped>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoviesList movies={similarMoviesList} amount={MAX_SIMILAR_MOVIES_AMOUNT}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2020 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    moviesList: getMoviesList(state),
    reviews: getReviews(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoad(movie) {
    dispatch(ReviewsOperation.loadReviews(movie));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
