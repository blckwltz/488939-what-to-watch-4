import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {moviesList} from '../../__test-mocks__/movies';
import {noop} from '../../__test-mocks__/noop';
import NameSpace from '../../store/name-space';
import {FavoriteList} from './favorite-list';

const mockStore = configureStore([]);

it(`Should render FavoriteList component correctly`, () => {
  const store = mockStore({
    [NameSpace.MOVIES]: {
      moviesList,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
    }
  });
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <FavoriteList
            favoriteList={moviesList}
            onLoad={noop}
          />
        </MemoryRouter>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
