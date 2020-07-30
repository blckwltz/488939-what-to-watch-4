import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Movie} from '../../types/movie';
import {getActiveGenre, getShownMoviesAmount, getFilteredList} from '../../store/movies/selectors';
import withActiveGenre from '../../hocs/with-active-genre/with-active-genre';
import MovieCard from '../movie-card/movie-card';
import GenresList from '../genres-list/genres-list';
import MoviesList from '../movies-list/movies-list';
import ShowMoreButton from '../show-more-button/show-more-button';

interface Props {
  moviesList: Movie[],
  activeGenre: string,
  shownMoviesAmount: number,
}

const GenresListWrapped = withActiveGenre(GenresList);

const Main = (props: Props) => {
  const {moviesList, activeGenre, shownMoviesAmount} = props;

  return <Fragment>
    <MovieCard/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresListWrapped genre={activeGenre}/>

        <MoviesList movies={moviesList} amount={shownMoviesAmount}/>

        <div className="catalog__more">
          <ShowMoreButton/>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2020 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </Fragment>;
};

const mapStateToProps = (state) => ({
  moviesList: getFilteredList(state),
  activeGenre: getActiveGenre(state),
  shownMoviesAmount: getShownMoviesAmount(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
