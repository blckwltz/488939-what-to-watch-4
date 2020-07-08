import React, {Fragment} from 'react';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import MoviesList from '../movies-list/movies-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';

const GenresListWrapped = withActiveItem(GenresList);

const Main = () => {
  return <Fragment>
    <MovieCard/>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresListWrapped/>

        <MoviesList/>

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
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </Fragment>;
};

Main.propTypes = {};

export default Main;
