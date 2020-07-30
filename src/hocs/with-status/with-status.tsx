import React, {PureComponent, ComponentProps} from 'react';
import {Subtract} from 'utility-types';

interface InjectingProps {
  isFavorite: boolean;
}

interface State {
  isFavorite: boolean;
}

const withStatus = (Component) => {
  type P = ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithStatus extends PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isFavorite: this.props.isFavorite,
      };

      this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidUpdate(prevProps) {
      const {isFavorite: prevStatus} = prevProps;
      const {isFavorite: currentStatus} = this.props;

      if (currentStatus !== prevStatus) {
        this.setState({
          isFavorite: currentStatus,
        });
      }
    }

    handleStatusChange() {
      const {isFavorite} = this.state;

      this.setState({isFavorite: !isFavorite});
    }

    render() {
      const {isFavorite} = this.state;

      return <Component
        {...this.props}
        isFavorite={isFavorite}
        onStatusChange={this.handleStatusChange}
      />;
    }
  }

  return WithStatus;
};

export default withStatus;
