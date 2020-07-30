import React, {ReactElement} from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie} from '../../__test-mocks__/movies';
import {noop} from '../../__test-mocks__/noop';
import MovieCardSmall from './movie-card-small';

const children: ReactElement = <div/>;

it(`Should render MovieCardSmall component correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <MovieCardSmall
            movie={featuredMovie}
            activeItem={false}
            onActiveItemChange={noop}
            onPlaybackStatusChange={noop}
          >
            {children}
          </MovieCardSmall>
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
