import {takeLatest} from 'redux-saga/effects';
import {sagaHandlerAction} from '../Constants/APIActions';
import {requestApiCallHandler} from './handler';
import {REQUEST_USER_API} from '../Constants/APIActions';

export function* watcherSaga() {
  yield takeLatest(REQUEST_USER_API, requestApiCallHandler);
}
