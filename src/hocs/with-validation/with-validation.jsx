import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {validateReview} from '../../utils/utils.js';

const withValidation = (Component) => {
  class WithValidation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false,
      };

      this._handleValidation = this._handleValidation.bind(this);
    }

    _handleValidation() {
      const {rating, text} = this.props;

      if (validateReview(rating, text)) {
        this.setState({
          isValid: true,
        });

        return;
      }

      this.setState({
        isValid: false,
      });
    }

    render() {
      const {isValid} = this.state;

      return <Component
        {...this.props}
        isValid={isValid}
        onValidityCheck={this._handleValidation}
      />;
    }
  }

  WithValidation.propTypes = {
    rating: PropTypes.string,
    text: PropTypes.string,
  };

  return WithValidation;
};

export default withValidation;
