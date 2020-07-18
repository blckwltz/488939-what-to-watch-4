import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withStatus = (Component) => {
  class WithStatus extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFavorite: this.props.isFavorite,
      };

      this._handleStatusChange = this._handleStatusChange.bind(this);
    }

    _handleStatusChange() {
      const {isFavorite} = this.state;

      this.setState({isFavorite: !isFavorite});
    }

    render() {
      const {isFavorite} = this.state;

      return <Component
        {...this.props}
        isFavorite={isFavorite}
        onStatusChange={this._handleStatusChange}
      />;
    }
  }

  WithStatus.propTypes = {
    isFavorite: PropTypes.bool,
  };

  return WithStatus;
};

export default withStatus;
