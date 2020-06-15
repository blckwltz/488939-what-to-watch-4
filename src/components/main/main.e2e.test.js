import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

const Settings = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: 2014,
  MOVIES_NAMES: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  ON_TITLE_CLICK: jest.fn(),
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should call onClick handler once`, () => {
  const main = shallow(
      <Main
        name={Settings.NAME}
        genre={Settings.GENRE}
        date={Settings.DATE}
        moviesNames={Settings.MOVIES_NAMES}
        onTitleClick={Settings.ON_TITLE_CLICK}
      />
  );
  const moviesTitles = main.find(`h3.small-movie-card__title`);

  moviesTitles.forEach((title) => {
    title.simulate(`click`);
    expect(Settings.ON_TITLE_CLICK).toHaveBeenCalledTimes(1);
  });
});
