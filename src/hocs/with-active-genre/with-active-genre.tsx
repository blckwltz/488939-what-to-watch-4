import React, {PureComponent} from 'react';
import {FilterSettings} from '../../utils/const';

interface State {
  activeGenre: string,
}

interface Props {
  genre?: string,
}

const withActiveGenre = (Component) => {
  class WithActiveGenre extends PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeGenre: this.props.genre || FilterSettings.INITIAL_VALUE,
      };

      this.handleActiveGenreChange = this.handleActiveGenreChange.bind(this);
    }

    handleActiveGenreChange(genre) {
      this.setState({
        activeGenre: genre,
      });
    }

    render() {
      const {activeGenre} = this.state;

      return <Component
        {...this.props}
        activeGenre={activeGenre}
        onActiveGenreChange={this.handleActiveGenreChange}
      />;
    }
  }

  return WithActiveGenre;
};

export default withActiveGenre;
