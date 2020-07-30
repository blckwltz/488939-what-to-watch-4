import React from 'react';
import {connect} from 'react-redux';
import {Movie} from '../../types/movie';
import {ActionCreator} from '../../store/movies/movies';
import {getMoviesList} from '../../store/movies/selectors';
import {getGenresList} from '../../utils/utils';

interface Props {
  moviesList: Movie[],
  activeGenre: string,
  onActiveGenreChange: (genre: string) => void,
  onGenreClick: (genre: string) => void,
}

const GenresList = (props: Props) => {
  const {moviesList, activeGenre, onActiveGenreChange, onGenreClick} = props;
  const genresList = getGenresList(moviesList);

  return <ul className="catalog__genres-list">
    {genresList.map((genre, index) => {
      return <li key={`${genre}-${index}`} className={`catalog__genres-item ${(activeGenre === genre) ? `catalog__genres-item--active` : ``}`} onClick={() => {
        onActiveGenreChange(genre);
        onGenreClick(genre);
      }}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>;
    })}
  </ul>;
};

const mapStateToProps = (state) => ({
  moviesList: getMoviesList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.getFilteredList(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
