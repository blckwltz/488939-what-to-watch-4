import React, {ReactElement} from 'react';

interface Props {
  children: ReactElement[],
  activeItem: number,
  onActiveItemChange: (number) => void,
}

const Tabs = (props: Props) => {
  const {children, activeItem, onActiveItemChange} = props;

  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {children.map((child, index) => {
          const {title} = child.props;

          return <li key={`${title}-${index}`} className={`movie-nav__item ${(activeItem === index) ? `movie-nav__item--active` : ``}`} onClick={() => {
            onActiveItemChange(index);
          }}>
            <a href="#" className="movie-nav__link">{title}</a>
          </li>;
        })}
      </ul>
    </nav>
    {children.map((child, index) => {
      const {children: content} = child.props;

      return activeItem === index ? content : null;
    })}
  </div>;
};

export default Tabs;
