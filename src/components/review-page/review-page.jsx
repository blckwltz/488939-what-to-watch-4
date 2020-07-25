import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Status} from '../../utils/const.js';
import history from '../../routing/history.js';
import {AppRoute} from '../../routing/route.js';
import {Operation as ReviewsOperation} from '../../store/reviews/reviews.js';
import {getMovieById} from '../../store/movies/selectors.js';
import {getPostStatus} from '../../store/reviews/selectors.js';
import UserBlock from '../user-block/user-block.jsx';

class ReviewPage extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {status: prevStatus} = prevProps;
    const {match, status} = this.props;
    const id = Number(match.params.id);

    if (status !== prevStatus && status === Status.OK) {
      history.push(`${AppRoute.MOVIE}/${id}`);
    }
  }

  _handleSubmit(evt) {
    const {match, rating, text, onSubmit} = this.props;
    const id = Number(match.params.id);

    evt.preventDefault();

    onSubmit({
      id,
      rating,
      text,
    });
  }

  render() {
    const {match, movie, status, isValid, onRatingChange, onTextInput, onValidityCheck} = this.props;
    const id = Number(match.params.id);

    if (!movie) {
      return null;
    }

    const {title, cover, backgroundImage, backgroundColor} = movie;

    return <section className="movie-card movie-card--full" style={{background: backgroundColor}}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.MOVIE}/${id}`} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={cover} alt={title} width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        {status === Status.SERVER_ERROR && <p className="movie-card__text">Error {status} occurred. Please try again later.</p>}
        <form action="#" className="add-review__form" onSubmit={this._handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={(evt) => {
                onRatingChange(evt);
                onValidityCheck();
              }}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={(evt) => {
                onRatingChange(evt);
                onValidityCheck();
              }}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={(evt) => {
                onRatingChange(evt);
                onValidityCheck();
              }}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={(evt) => {
                onRatingChange(evt);
                onValidityCheck();
              }}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={(evt) => {
                onRatingChange(evt);
                onValidityCheck();
              }}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text" onChange={(evt) => {
                onTextInput(evt);
                onValidityCheck();
              }}/>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={!isValid}>Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>;
  }
}

ReviewPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
  }),
  rating: PropTypes.string,
  text: PropTypes.string,
  isValid: PropTypes.bool,
  status: PropTypes.number,
  onSubmit: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onTextInput: PropTypes.func.isRequired,
  onValidityCheck: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {match} = ownProps;
  const id = Number(match.params.id);

  return {
    movie: getMovieById(state, id),
    status: getPostStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(reviewData) {
    dispatch(ReviewsOperation.postReview(reviewData));
  }
});

export {ReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);
