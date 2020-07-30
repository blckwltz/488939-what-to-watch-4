import React, {PureComponent} from 'react';

interface State {
  rating: string,
}

const withRating = (Component) => {
  class WithRating extends PureComponent<{}, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: `0`,
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    render() {
      const {rating} = this.state;

      return <Component
        {...this.props}
        rating={rating}
        onRatingChange={this.handleRatingChange}
      />;
    }
  }

  return WithRating;
};

export default withRating;
