import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getActiveGenre, getShownMoviesAmount, getFilteredList} from '../../store/movies/selectors.js';
import withActiveGenre from '../../hocs/with-active-genre/with-active-genre.js';
import MovieCard from '../movie-card/movie-card.js';
import GenresList from '../genres-list/genres-list.tsx';
import MoviesList from '../movies-list/movies-list.js';
import ShowMoreButton from '../show-more-button/show-more-button.js';

const GenresListWrapped = withActiveGenre(GenresList);

const Main = (props) => {
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

Main.propTypes = {
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        poster: PropTypes.string.isRequired,
        previewSrc: PropTypes.string.isRequired,
      })
  ),
  activeGenre: PropTypes.string,
  shownMoviesAmount: PropTypes.number,
};

const mapStateToProps = (state) => ({
  moviesList: getFilteredList(state),
  activeGenre: getActiveGenre(state),
  shownMoviesAmount: getShownMoviesAmount(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
