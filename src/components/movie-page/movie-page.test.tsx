import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie, moviesList} from '../../__test-mocks__/movies';
import {reviews} from '../../__test-mocks__/reviews';
import {noop} from '../../__test-mocks__/noop';
import NameSpace from '../../store/name-space';
import {MoviePage} from './movie-page';

const mockStore = configureStore([]);
const match = {
  params: {
    id: `1`,
  },
};

it(`Should render MoviePage component correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      featuredMovie,
      moviesList,
      activeGenre: `All genres`,
      shownMoviesAmount: 8,
    },
    [NameSpace.REVIEWS]: {
      reviews
    },
    [NameSpace.USER]: {
      authorizationStatus: 200,
    }
  });
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <MoviePage
            match={match}
            movie={featuredMovie}
            moviesList={moviesList}
            reviews={reviews}
            onLoad={noop}
          />
        </MemoryRouter>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    });

  expect(tree).toMatchSnapshot();
});
