import React, {ReactNode} from 'react';
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

const MovieCardSmall = (props: Props) => {
  const {movie, children, activeItem, onActiveItemChange, onPlaybackStatusChange} = props;
  const {id, title, poster} = movie;
  let timeout;

  return <article className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image" onMouseEnter={() => {
      timeout = setTimeout(() => {
        onActiveItemChange(true);
        onPlaybackStatusChange();
      }, PLAYBACK_DELAY);
    }} onMouseLeave={() => {
      clearTimeout(timeout);
      onActiveItemChange(false);
    }}>
      <Link to={`${AppRoute.MOVIE}/${id}`}>{activeItem ? children : <img src={poster} alt={title} width="280" height="175"/>}</Link>
    </div>
    <h3 className="small-movie-card__title">
      <Link to={`${AppRoute.MOVIE}/${id}`} className="small-movie-card__link">{title}</Link>
    </h3>
  </article>;
};

export default MovieCardSmall;
