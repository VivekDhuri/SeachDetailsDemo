import {call, put} from 'redux-saga/effects';
import {apiAction, apiEndPoints} from '../Constants/APIActions';
import {apiInitials} from '../Constants/ApiTypes';
import {requestApi} from '../Request/request';

export function* requestApiCallHandler() {
  const {Api_In_Progress, Api_In_FAILURE, Api_In_SUCCESS} = apiAction(
    apiInitials.user,
  );

  const userApi = apiEndPoints.users;
  try {
    yield put({type: Api_In_Progress});
    const response = yield call(requestApi, userApi);

    const {data} = response;
    console.log('data', data);
    yield put({type: Api_In_SUCCESS, payload: data});
  } catch (error) {
    console.log('Api request failed', error);
    yield put({type: Api_In_FAILURE, payload: error});
  }
}
