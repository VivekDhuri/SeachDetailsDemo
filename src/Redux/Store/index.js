import {createStore, applyMiddleware} from 'redux';
import reducer from '../Reducers/index';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from '../Sagas/rootsaga';

const sagaMiddleware = createSagaMiddleware();

//middleware array
const middleWare = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleWare));

//setupping watcher saga
sagaMiddleware.run(watcherSaga);

export default store;
