import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Status} from '../utils/const.js';
import {ActionCreator as MoviesAction} from './movies/movies.js';
import {ActionCreator as UserAction, AuthorizationStatus} from './user/user.js';
import {ActionCreator as ReviewsAction} from './reviews/reviews.js';
import reducer from './reducer.js';
import {createAPI} from '../api/api.js';

const onUnauthorized = () => {
  store.dispatch(UserAction.requireAuthorization(AuthorizationStatus.NO_AUTH));
};
const onError = (status) => {
  store.dispatch(MoviesAction.updateStatus(status));
};
const onLoginError = (status) => {
  store.dispatch(UserAction.updateLoginStatus(status));
};
const onReviewError = (status) => {
  store.dispatch(ReviewsAction.updatePostStatus(status));
};
const onServerError = () => {
  store.dispatch(MoviesAction.updateStatus(Status.SERVER_ERROR));
};
const api = createAPI(onUnauthorized, onError, onLoginError, onReviewError, onServerError);
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

export default store;
