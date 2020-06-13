import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {movieName, movieGenre, releaseDate, moviesNames} = props;

  return <Main
    name={movieName}
    genre={movieGenre}
    date={releaseDate}
    moviesNames={moviesNames}
  />;
};

App.propTypes = {
  movieName: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  moviesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
