import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import withVideo from '../../hocs/with-video/with-video.jsx';
import MovieCardSmall from '../movie-card-small/movie-card-small.jsx';

const MovieCardSmallWrapped = withVideo(MovieCardSmall);

const MoviesList = (props) => {
  const {movies, amount} = props;
  const moviesToShow = movies.slice(0, amount);

  return <div className="catalog__movies-list">
    {moviesToShow.map((movie, index) => {
      const {title, poster, previewSrc} = movie;

      return <MovieCardSmallWrapped key={`${title}-${index}`} movieInfo={movie} isPlaying={false} isMuted={true} src={previewSrc} poster={poster}/>;
    })}
  </div>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewSrc: PropTypes.string.isRequired,
  })).isRequired,
  amount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.filteredList,
  amount: state.shownMoviesAmount,
});

export {MoviesList};
export default connect(mapStateToProps)(MoviesList);
