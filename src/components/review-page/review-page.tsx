import React, {Fragment, PureComponent, ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Movie} from '../../types/movie';
import {Match} from '../../types/match';
import {REVIEW_RATINGS, Status} from '../../utils/const';
import history from '../../routing/history';
import {AppRoute} from '../../routing/route';
import {Operation as ReviewsOperation} from '../../store/reviews/reviews';
import {getPostStatus, getPublishedStatus} from '../../store/reviews/selectors';
import UserBlock from '../user-block/user-block';

interface Props {
  match: Match;
  movie: Movie;
  rating: string;
  text: string;
  isValid: boolean;
  status: number;
  isPublished: boolean;
  onSubmit: ({id, rating, text}: {id: number; rating: string; text: string}) => void;
  onRatingChange: (evt: ChangeEvent) => void;
  onTextInput: (evt: ChangeEvent) => void;
  onValidityCheck: () => void;
}

class ReviewPage extends PureComponent<Props> {
  constructor(props) {
    super(props);

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {status: prevStatus} = prevProps;
    const {match, status, isPublished} = this.props;
    const id = Number(match.params.id);

    if (status !== prevStatus && isPublished) {
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
              {REVIEW_RATINGS.map((rating) => {
                return <Fragment key={rating}>
                  <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} onChange={(evt) => {
                    onRatingChange(evt);
                    onValidityCheck();
                  }}/>
                  <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
                </Fragment>;
              })}
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

const mapStateToProps = (state) => {
  return {
    status: getPostStatus(state),
    isPublished: getPublishedStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(reviewData) {
    dispatch(ReviewsOperation.postReview(reviewData));
  }
});

export {ReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);
