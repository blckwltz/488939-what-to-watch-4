import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import {FilterSettings} from '../../const.js';

class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleTabClick = this._handleTabClick.bind(this);
    this.state = {
      activeTab: 0,
    };
  }

  _handleTabClick(index) {
    this.setState({
      activeTab: index
    });
  }

  render() {
    const {moviesList, onClick} = this.props;
    const {activeTab} = this.state;
    const genresList = moviesList.map((item) => {
      return item.genre;
    });
    genresList.unshift(FilterSettings.INITIAL_VALUE);
    const uniqueGenresList = new Set(genresList.slice(0, FilterSettings.MAX_AMOUNT));

    return <ul className="catalog__genres-list">
      {Array.from(uniqueGenresList).map((genre, index) => {
        return <li key={`${genre}-${index}`} className={`catalog__genres-item ${(activeTab === index) ? `catalog__genres-item--active` : ``}`} onClick={() => {
          onClick(genre);
          this._handleTabClick(index);
        }}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>;
      })}
    </ul>;
  }
}

GenresList.propTypes = {
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        genre: PropTypes.string.isRequired,
      })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClick(genre) {
    dispatch(ActionCreator.getFilteredList(genre));
  },
});

export {GenresList};
export default connect(null, mapDispatchToProps)(GenresList);
