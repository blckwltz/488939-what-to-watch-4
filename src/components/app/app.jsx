import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from '../main/main.jsx';
import MoviePage from '../movie-page/movie-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderMainPage() {
    return <Main/>;
  }

  _renderMoviePage(movie) {
    return <MoviePage
      movieInfo={movie}
    />;
  }

  render() {
    const {moviesList} = this.props;
    const movieInfo = moviesList[0];

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderMainPage()}
        </Route>
        <Route exact path="/movie-page">
          {this._renderMoviePage(movieInfo)}
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    cast: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  moviesList: state.moviesList,
});

export {App};
export default connect(mapStateToProps, null)(App);
