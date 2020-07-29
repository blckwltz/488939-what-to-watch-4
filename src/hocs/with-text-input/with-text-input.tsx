import React, {PureComponent} from 'react';

const withTextInput = (Component) => {
  class WithTextInput extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        text: ``,
      };

      this._handleInput = this._handleInput.bind(this);
    }

    _handleInput(evt) {
      this.setState({
        text: evt.target.value,
      });
    }

    render() {
      const {text} = this.state;

      return <Component
        {...this.props}
        text={text}
        onTextInput={this._handleInput}
      />;
    }
  }

  WithTextInput.propTypes = {};

  return WithTextInput;
};

export default withTextInput;
