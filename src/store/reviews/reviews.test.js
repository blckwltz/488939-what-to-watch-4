import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api/api';
import {reviews} from '../../__test-mocks__/reviews.ts';
import {createReviewsList} from '../../api/adapters/reviews';
import {reducer, ActionType, Operation} from './reviews';

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    reviews: [],
    postStatus: 0,
    isPublished: false,
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
    const reviewsLoader = Operation.loadReviews(1);

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
