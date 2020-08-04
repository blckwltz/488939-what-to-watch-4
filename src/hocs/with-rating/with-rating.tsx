import React, {PureComponent, ComponentProps} from 'react';
import {Subtract} from 'utility-types';
import {Review} from '../../utils/const';

interface InjectingProps {
  rating: string;
}

interface State {
  rating: string;
}

const withRating = (Component) => {
  type P = ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithRating extends PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: props.rating || Review.DEFAULT_RATING,
      };

      this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    handleRatingChange(evt) {
      const rating = evt.target.value;

      this.setState({
        rating,
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
