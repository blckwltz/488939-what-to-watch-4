import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {featuredMovie, moviesList} from '../../__test-mocks__/movies';
import {reviews} from '../../__test-mocks__/reviews';
import {authorizationStatus} from '../../__test-mocks__/user';
import NameSpace from '../../store/name-space';
import {MoviePage} from './movie-page';

const mockStore = configureStore([]);
const match = {
  params: {
    id: `1`,
  },
};
const onLoad = () => {};

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
      authorizationStatus,
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
            onLoad={onLoad}
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
