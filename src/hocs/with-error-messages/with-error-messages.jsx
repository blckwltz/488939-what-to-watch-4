import React, {PureComponent, createRef} from 'react';

const withErrorMessages = (Component) => {
  class WithErrorMessages extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: `0`,
        text: ``,
        errorMessage: ``,
      };

      this._textRef = createRef();
      this._handleCheck = this._handleCheck.bind(this);
      this._handleInput = this._handleInput.bind(this);
      this._handleValidation = this._handleValidation.bind(this);
    }

    _handleCheck(evt) {
      this.setState({
        rating: evt.target.value,
        errorMessage: ``,
      });
    }

    _handleInput(evt) {
      this.setState({
        text: evt.target.value,
        errorMessage: ``,
      });
    }

    _handleValidation() {
      const {rating} = this.state;
      const text = this._textRef.current.value;

      if (rating === `0`) {
        this.setState({
          errorMessage: `Please select rating`,
        });

        return false;
      }

      if (!text || text.length < 50 || text > 400) {
        this.setState({
          errorMessage: `Comment must be between 50 and 400 characters`,
        });

        return false;
      }

      return true;
    }

    render() {
      const {rating, text, errorMessage} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          text={text}
          errorMessage={errorMessage}
          onCheck={this._handleCheck}
          onValidityCheck={this._handleValidation}
        >
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text" onChange={this._handleInput} ref={this._textRef}/>
        </Component>
      );
    }
  }

  WithErrorMessages.propTypes = {};

  return WithErrorMessages;
};

export default withErrorMessages;
