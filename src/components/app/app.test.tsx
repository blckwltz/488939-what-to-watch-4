import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {featuredMovie, moviesList} from '../../__test-mocks__/movies';
import {reviews} from '../../__test-mocks__/reviews';
import NameSpace from '../../store/name-space';
import App from './app';

const mockStore = configureStore([]);

it(`Should render App component correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      featuredMovie,
      moviesList,
      activeGenre: `All genres`,
      shownMoviesAmount: 8,
      status: 200,
    },
    [NameSpace.REVIEWS]: {
      reviews,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
    }
  });

  const tree = renderer
    .create((
      <Provider store={store}>
        <App/>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
