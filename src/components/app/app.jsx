import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  const {featuredMovieTitle, featuredMovieGenre, featuredMovieReleaseDate, movieTitles, onTitleClick} = props;

  return <Main
    featuredMovieTitle={featuredMovieTitle}
    featuredMovieGenre={featuredMovieGenre}
    featuredMovieReleaseDate={featuredMovieReleaseDate}
    movieTitles={movieTitles}
    onTitleClick={onTitleClick}
  />;
};

App.propTypes = {
  featuredMovieTitle: PropTypes.string.isRequired,
  featuredMovieGenre: PropTypes.string.isRequired,
  featuredMovieReleaseDate: PropTypes.number.isRequired,
  movieTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default App;
