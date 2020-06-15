import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  MOVIE_NAME: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  RELEASE_DATE: 2014,
  MOVIES_NAMES: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  ON_TITLE_CLICK: () => {},
};

const rootElement = document.querySelector(`#root`);
const init = () => {
  ReactDom.render(
      <App
        movieName={Settings.MOVIE_NAME}
        movieGenre={Settings.MOVIE_GENRE}
        releaseDate={Settings.RELEASE_DATE}
        moviesNames={Settings.RELEASE_DATE}
        onTitleClick={Settings.ON_TITLE_CLICK}
      />,
      rootElement
  );
};

init();
