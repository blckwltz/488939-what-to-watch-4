import React, {PureComponent} from 'react';
import {validateReview} from '../../utils/utils';

interface Props {
  rating: string,
  text: string,
}

interface State {
  isValid: boolean,
}

const withValidation = (Component) => {
  class WithValidation extends PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        isValid: false,
      };

      this.handleValidation = this.handleValidation.bind(this);
    }

    handleValidation() {
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
        onValidityCheck={this.handleValidation}
      />;
    }
  }

  return WithValidation;
};

export default withValidation;
