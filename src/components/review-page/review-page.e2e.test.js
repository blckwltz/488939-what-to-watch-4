import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import {Status} from '../../utils/const';
import {featuredMovie} from '../../__test-mocks__/movies';
import {authorizationStatus} from '../../__test-mocks__/user';
import NameSpace from '../../store/name-space';
import {ReviewPage} from './review-page';

configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);
const match = {
  params: {
    id: `1`,
  },
};
const onSubmit = jest.fn();
const onRatingChange = () => {};
const onTextInput = () => {};
const onValidityCheck = () => {};

it(`Should pass correct data on form submit`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus,
    },
    [NameSpace.REVIEWS]: {
      postStatus: 0,
    },
  });
  const reviewPage = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ReviewPage
            match={match}
            movie={featuredMovie}
            rating={`5`}
            text={`This is a review that is at least 50 characters long`}
            isValid={true}
            status={Status.OK}
            onSubmit={onSubmit}
            onRatingChange={onRatingChange}
            onTextInput={onTextInput}
            onValidityCheck={onValidityCheck}
          />
        </MemoryRouter>
      </Provider>
  );
  const reviewForm = reviewPage.find(`form.add-review__form`);

  reviewForm.simulate(`submit`);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({id: Number(match.params.id), rating: `5`, text: `This is a review that is at least 50 characters long`});
});
