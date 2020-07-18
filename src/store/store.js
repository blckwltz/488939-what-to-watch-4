import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Status} from '../utils/const.js';
import {ActionCreator as MoviesAction} from './movies/movies.js';
import {ActionCreator as UserAction, AuthorizationStatus} from './user/user.js';
import reducer from './reducer.js';
import {createAPI} from '../api/api.js';

const onUnauthorized = () => {
  store.dispatch(UserAction.requireAuthorization(AuthorizationStatus.NO_AUTH));
};
const onError = () => {
  store.dispatch(MoviesAction.updateStatus(Status.ERROR));
};
const onServerError = () => {
  store.dispatch(MoviesAction.updateStatus(Status.SERVER_ERROR));
};
const api = createAPI(onUnauthorized, onError, onServerError);
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

export default store;
