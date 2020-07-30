import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {Status} from '../../utils/const';
import NameSpace from '../../store/name-space';
import {featuredMovie} from '../../__test-mocks__/movies';
import {ReviewPage} from './review-page';

const mockStore = configureStore([]);
const match = {
  params: {
    id: `1`,
  },
};
const onSubmit = () => {};
const onRatingChange = () => {};
const onTextInput = () => {};
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
              rating={`5`}
              text={``}
              isValid={false}
              status={Status.OK}
              isPublished={true}
              onSubmit={onSubmit}
              onRatingChange={onRatingChange}
              onTextInput={onTextInput}
              onValidityCheck={onValidityCheck}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
