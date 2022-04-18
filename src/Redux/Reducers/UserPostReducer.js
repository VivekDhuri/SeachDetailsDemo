import {apiInitials} from '../Constants/ApiTypes';
import {apiAction} from '../Constants/APIActions';

const initialState = {};

export default function (state = initialState, action) {
  const {Api_In_Progress, Api_In_SUCCESS, Api_In_FAILURE} = apiAction(
    apiInitials.posts,
  );

  switch (action.type) {
    case Api_In_Progress:
      return {...state, data: action.payload};
    case Api_In_SUCCESS:
      return {...state, data: action.payload};
    case Api_In_FAILURE:
      console.log('user reducer called');
    default:
      return state;
  }
}
