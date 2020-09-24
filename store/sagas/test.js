import { takeEvery,takeLatest,call } from 'redux-saga/effects'; 
import {postSignIn} from '../../services/authApi'
function* increment() {
const data = yield call(postSignIn,{
    email: 'test@gmail.com',
    password: '123456'
})
console.log(data)
}

export function* test() {
    yield takeLatest('TEST', increment);
}
