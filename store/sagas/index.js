import { all } from 'redux-saga/effects';
import {test} from './test'
import {authSaga} from './authSaga'
export default function* rootSaga() {
    yield all([
        test(),
        authSaga()
    ]);
}
