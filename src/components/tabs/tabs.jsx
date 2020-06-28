import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import Tab from '../tab/tab.jsx';

export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this._handleTabClick = this._handleTabClick.bind(this);
    this.state = {
      activeTab: this.props.tabLabels[0],
    };
  }

  _handleTabClick(tabLabel) {
    this.setState({
      activeTab: tabLabel
    });
  }

  render() {
    const {tabLabels, children} = this.props;
    const {activeTab} = this.state;

    return <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabLabels.map((label, index) => {
            return <Tab key={`${label}-${index}`} activeTab={activeTab} tabLabel={label} onClick={() => {
              this._handleTabClick(label);
            }}/>;
          })}
        </ul>
      </nav>
      {children.map((child, index) => {
        const tabLabel = tabLabels[index];

        return tabLabel === activeTab ? <Fragment key={tabLabel}>
          {child}
        </Fragment> : null;
      })}
    </div>;
  }
}

Tabs.propTypes = {
  tabLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
