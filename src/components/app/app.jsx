import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {movieName, movieGenre, releaseDate, moviesNames, onTitleClick} = props;

  return <Main
    name={movieName}
    genre={movieGenre}
    date={releaseDate}
    moviesNames={moviesNames}
    onTitleClick={onTitleClick}
  />;
};

App.propTypes = {
  movieName: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  moviesNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default App;
