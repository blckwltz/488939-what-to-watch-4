import React, {PureComponent, ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {Movie} from '../../types/movie';
import {PLAYBACK_DELAY} from '../../utils/const';
import {AppRoute} from '../../routing/route';

interface Props {
  movie: Movie;
  children: ReactNode | ReactNode[];
  activeItem: boolean;
  onActiveItemChange: (boolean) => void;
  onPlaybackStatusChange: () => void;
}

class MovieCardSmall extends PureComponent<Props> {
  private _timeout: ReturnType<typeof setTimeout> | null;

  constructor(props) {
    super(props);

    this._timeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this._timeout);
  }

  render() {
    const {movie, children, activeItem, onActiveItemChange, onPlaybackStatusChange} = this.props;
    const {id, title, poster} = movie;

    return <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image" onMouseEnter={() => {
        this._timeout = setTimeout(() => {
          onActiveItemChange(true);
          onPlaybackStatusChange();
        }, PLAYBACK_DELAY);
      }} onMouseLeave={() => {
        clearTimeout(this._timeout);
        onActiveItemChange(false);
      }}>
        <Link to={`${AppRoute.MOVIE}/${id}`}>{activeItem ? children : <img src={poster} alt={title} width="280" height="175"/>}</Link>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`${AppRoute.MOVIE}/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>;
  }
}

export default MovieCardSmall;
