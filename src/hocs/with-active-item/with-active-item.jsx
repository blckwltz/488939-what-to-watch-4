import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItemIndex: 0,
      };

      this._handleActiveItemChange = this._handleActiveItemChange.bind(this);
    }

    _handleActiveItemChange(index) {
      this.setState({
        activeItemIndex: index,
      });
    }

    render() {
      const {activeItemIndex} = this.state;

      return <Component
        {...this.props}
        activeItem={activeItemIndex}
        onActiveItemChange={this._handleActiveItemChange}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
