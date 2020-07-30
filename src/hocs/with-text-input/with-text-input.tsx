import React, {PureComponent} from 'react';

interface State {
  text: string;
}

const withTextInput = (Component) => {
  class WithTextInput extends PureComponent<{}, State> {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
      };

      this.handleInput = this.handleInput.bind(this);
    }

    handleInput(evt) {
      this.setState({
        text: evt.target.value,
      });
    }

    render() {
      const {text} = this.state;

      return <Component
        {...this.props}
        text={text}
        onTextInput={this.handleInput}
      />;
    }
  }

  return WithTextInput;
};

export default withTextInput;
