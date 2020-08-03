import React, {PureComponent} from 'react';
import {validateReviewText} from '../../utils/utils';

interface State {
  text: string;
  isTextValid: boolean;
}

const withTextInput = (Component) => {
  class WithTextInput extends PureComponent<{}, State> {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
        isTextValid: false,
      };

      this.handleInput = this.handleInput.bind(this);
    }

    handleInput(evt) {
      const text = evt.target.value;

      this.setState({
        text,
        isTextValid: validateReviewText(text),
      });
    }

    render() {
      const {text, isTextValid} = this.state;

      return <Component
        {...this.props}
        text={text}
        isTextValid={isTextValid}
        onTextInput={this.handleInput}
      />;
    }
  }

  return WithTextInput;
};

export default withTextInput;
