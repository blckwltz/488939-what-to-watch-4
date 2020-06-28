import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  const {activeTab, tabLabel, onClick} = props;

  return <li className={`movie-nav__item ${(activeTab === tabLabel) && `movie-nav__item--active`}`} onClick={() => {
    onClick(tabLabel);
  }}>
    <a href="#" className="movie-nav__link">{tabLabel}</a>
  </li>;
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  tabLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
