import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import NameSpace from '../../store/name-space.js';
import {featuredMovie} from '../../__test-mocks__/movies.js';
import {ReviewPage} from './review-page';

const mockStore = configureStore([]);
const match = {
  params: {
    id: `1`,
  },
};
const onSubmit = () => {};
const onCheck = () => {};
const onValidityCheck = () => {};

it(`Should render ReviewPage component correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <ReviewPage
              match={match}
              movie={featuredMovie}
              onSubmit={onSubmit}
              onCheck={onCheck}
              onValidityCheck={onValidityCheck}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
