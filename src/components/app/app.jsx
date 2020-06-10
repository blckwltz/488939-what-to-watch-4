import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieName, movieGenre, releaseDate} = props;

  return <Main
    name={movieName}
    genre={movieGenre}
    date={releaseDate}
  />;
};

export default App;
