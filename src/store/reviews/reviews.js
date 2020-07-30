import {URL, Status} from '../../utils/const';
import {extend} from '../../utils/utils';
import {createReviewsList} from '../../api/adapters/reviews';

const initialState = {
  reviews: [],
  postStatus: 0,
  isPublished: false,
};

const ActionType = {
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  UPDATE_POST_STATUS: `UPDATE_POST_STATUS`,
};

const ActionCreator = {
  loadReviews: (reviewsList) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsList,
    };
  },
  updatePostStatus: (status) => {
    return {
      type: ActionType.UPDATE_POST_STATUS,
      payload: status,
    };
  },
};

const Operation = {
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`${URL.REVIEWS}/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(createReviewsList(response.data)));
      });
  },
  postReview: (reviewData) => (dispatch, getState, api) => {
    api.post(`${URL.REVIEWS}/${reviewData.id}`, {
      rating: reviewData.rating,
      comment: reviewData.text,
    })
      .then(() => {
        dispatch(ActionCreator.updatePostStatus(Status.OK));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.UPDATE_POST_STATUS:
      return extend(state, {
        postStatus: action.payload,
        isPublished: true,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
