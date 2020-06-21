import React from 'react';
import ReactDom from 'react-dom';
import films from './mocks/films.js';
import App from './components/app/app.jsx';

const {featured, list} = films;
const rootElement = document.querySelector(`#root`);
const init = () => {
  ReactDom.render(
      <App
        featuredMovie={featured}
        moviesList={list}
      />,
      rootElement
  );
};

init();
