import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {movies} = this.props;

    return <div className="catalog__movies-list">
      {movies.map((movie) => <MovieCard key={movie.title} title={movie.title} poster={movie.poster} onClick={() => {}} onHover={() => {
        this.setState({
          activeCard: movie,
        });
      }} onSettle={() => {
        this.setState({
          activeCard: null,
        });
      }}/>)}
    </div>;
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired,
};
