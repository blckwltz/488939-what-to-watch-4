import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

const rootElement = document.querySelector(`#root`);
const init = () => {
  const settings = {
    movieName: `The Grand Budapest Hotel`,
    movieGenre: `Drama`,
    releaseDate: 2014,
    moviesNames: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  };

  ReactDom.render(
      <App
        movieName={settings.movieName}
        movieGenre={settings.movieGenre}
        releaseDate={settings.releaseDate}
        moviesNames={settings.moviesNames}
      />,
      rootElement
  );
};

init();
