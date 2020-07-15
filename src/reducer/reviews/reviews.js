import {extend} from '../../utils/utils.js';
import {createReviewsList} from '../../api/adapters/reviews.js';

const initialState = {
  reviews: [],
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const ActionCreator = {
  loadReviews: (reviewsList) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsList,
    };
  }
};

const Operation = {
  loadReviews: (movie) => (dispatch, getState, api) => {
    return api.get(`/comments/${movie.id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(createReviewsList(response.data)));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, Operation};
