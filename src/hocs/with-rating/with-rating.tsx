import React, {PureComponent} from 'react';
import {validateReviewRating} from '../../utils/utils';

interface State {
  rating: string;
  isRatingValid: boolean;
}

const withRating = (Component) => {
  class WithRating extends PureComponent<{}, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: `0`,
        isRatingValid: false,
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    handleRatingChange(evt) {
      const rating = evt.target.value;

      this.setState({
        rating,
        isRatingValid: validateReviewRating(rating),
      });
    }

    render() {
      const {rating, isRatingValid} = this.state;

      return <Component
        {...this.props}
        rating={rating}
        isRatingValid={isRatingValid}
        onRatingChange={this.handleRatingChange}
      />;
    }
  }

  return WithRating;
};

export default withRating;
