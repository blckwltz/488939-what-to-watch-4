import {combineReducers} from 'redux';
import {reducer as movies} from './movies/movies';
import {reducer as reviews} from './reviews/reviews';
import {reducer as user} from './user/user';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.MOVIES]: movies,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.USER]: user,
});
