import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getShownMoviesAmount, getFilteredList} from '../../reducer/movies/selectors.js';
import withVideo from '../../hocs/with-video/with-video.jsx';
import MovieCardSmall from '../movie-card-small/movie-card-small.jsx';

const MovieCardSmallWrapped = withVideo(MovieCardSmall);

const MoviesList = (props) => {
  const {movies, amount} = props;
  const moviesToShow = movies.slice(0, amount);

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie) => {
      const {id, poster, previewSrc} = movie;

      return <MovieCardSmallWrapped key={id} movieInfo={movie} isPlaying={false} isMuted={true} src={previewSrc} poster={poster}/>;
    })}
  </div>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    poster: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
  })).isRequired,
  amount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getFilteredList(state),
  amount: getShownMoviesAmount(state),
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
