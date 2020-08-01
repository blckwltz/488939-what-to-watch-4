import React, {PureComponent} from 'react';

type ActiveItem = boolean | number | string;

interface Props {
  activeItem: ActiveItem;
}

interface State {
  activeItem: ActiveItem;
}

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeItem,
      };

      this.handleActiveItemChange = this.handleActiveItemChange.bind(this);
    }

    handleActiveItemChange(value) {
      this.setState({
        activeItem: value,
      });
    }

    render() {
      const {activeItem} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItem}
        onActiveItemChange={this.handleActiveItemChange}
      />;
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
