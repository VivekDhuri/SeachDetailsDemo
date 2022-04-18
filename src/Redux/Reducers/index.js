import {combineReducers} from 'redux';
import userReducer from '../Reducers/UsersReducer';
import postsReducer from '../Reducers/UserPostReducer';

export default combineReducers({
  user: userReducer,
  posts: postsReducer,
});
