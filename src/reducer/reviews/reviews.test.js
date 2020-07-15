import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api/api.js';
import {reviews} from '../../test-mocks/reviews.js';
import {createReviewsList} from '../../api/adapters/reviews.js';
import {reducer, ActionType, Operation} from './reviews';

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    reviews: [],
  });
});

it(`Reducer should update reviews`, () => {
  expect(reducer({
    reviews: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  })).toEqual({
    reviews,
  });
});

describe(`Operation works correctly`, () => {
  it(`Should make a correct API call to /comments/:filmId`, function () {
    const apiMock = new MockAdapter(api);
    const responseMock = [{fake: true}];
    const dispatch = jest.fn();
    const reviewsLoader = Operation.loadReviews({id: 1});

    apiMock
      .onGet(`/comments/1`)
      .reply(200, responseMock);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: createReviewsList(responseMock),
        });
      });
  });
});
