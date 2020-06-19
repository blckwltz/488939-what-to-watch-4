import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  RELEASE_DATE: 2014,
  MOVIE_TITLES: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
};
const ON_TITLE_CLICK = () => {};

const rootElement = document.querySelector(`#root`);
const init = () => {
  ReactDom.render(
      <App
        featuredMovieTitle={Settings.MOVIE_TITLE}
        featuredMovieGenre={Settings.MOVIE_GENRE}
        featuredMovieReleaseDate={Settings.RELEASE_DATE}
        movieTitles={Settings.MOVIE_TITLES}
        onTitleClick={ON_TITLE_CLICK}
      />,
      rootElement
  );
};

init();
