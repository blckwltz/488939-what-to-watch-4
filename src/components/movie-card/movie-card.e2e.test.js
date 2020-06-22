import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

const mocks = {
  title: `The Big Lebowski`,
  poster: `img/what-we-do-in-the-shadows.jpg`,
};
const onClick = jest.fn();
const onHover = jest.fn();
const onSettle = jest.fn();

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should call onClick handler when clicking on title and poster`, () => {
  const movieCard = shallow(
      <MovieCard
        movieInfo={mocks}
        onClick={onClick}
        onHover={onHover}
        onSettle={onSettle}
      />
  );

  const movieTitle = movieCard.find(`h3.small-movie-card__title`);
  const moviePoster = movieCard.find(`img`);

  movieTitle.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);

  moviePoster.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(2);
});

it(`Should pass movie info on card mouse enter`, () => {
  const movieCard = shallow(
      <MovieCard
        movieInfo={mocks}
        onClick={onClick}
        onHover={onHover}
        onSettle={onSettle}
      />
  );
  const moviePoster = movieCard.find(`div.small-movie-card__image`);

  moviePoster.simulate(`mouseenter`);
  expect(onHover).toHaveBeenCalledTimes(1);
  expect(onHover.mock.calls[0][0]).toMatchObject(mocks);
});
