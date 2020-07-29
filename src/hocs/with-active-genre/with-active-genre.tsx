import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FilterSettings} from '../../utils/const.js';

const withActiveGenre = (Component) => {
  class WithActiveGenre extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeGenre: this.props.genre || FilterSettings.INITIAL_VALUE,
      };

      this._handleActiveGenreChange = this._handleActiveGenreChange.bind(this);
    }

    _handleActiveGenreChange(genre) {
      this.setState({
        activeGenre: genre,
      });
    }

    render() {
      const {activeGenre} = this.state;

      return <Component
        {...this.props}
        activeGenre={activeGenre}
        onActiveGenreChange={this._handleActiveGenreChange}
      />;
    }
  }

  WithActiveGenre.propTypes = {
    genre: PropTypes.string,
  };

  return WithActiveGenre;
};

export default withActiveGenre;
