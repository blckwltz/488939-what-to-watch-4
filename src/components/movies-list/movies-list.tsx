import React from 'react';
import {Movie} from '../../types/movie';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withVideo from '../../hocs/with-video/with-video';
import MovieCardSmall from '../movie-card-small/movie-card-small';

interface Props {
  movies: Movie[],
  amount?: number,
}

const MovieCardSmallWrapped = withVideo(withActiveItem(MovieCardSmall));

const MoviesList = (props: Props) => {
  const {movies, amount} = props;
  const moviesToShow = amount ? movies.slice(0, amount) : movies;

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie) => {
      const {id} = movie;

      return <MovieCardSmallWrapped key={id} movie={movie} isPreview={true} isMuted={true} activeItem={false}/>;
    })}
  </div>;
};

export default MoviesList;
