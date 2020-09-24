import { takeEvery,takeLatest,call,put } from 'redux-saga/effects'; 
import {postSignIn} from '../../services/authApi'
import {SIGN_IN,SIGN_IN_SUCCESS,SIGN_IN_ERROR} from '../../screens/SignInScreen/constants'
function* signInSaga({payload}) {
    try {
        const {data} = yield call(postSignIn,payload)
        if(data){
            yield put({type:SIGN_IN_SUCCESS,payload: data})
        }
    } catch (error) {
        if(error){
            yield put({type: SIGN_IN_ERROR, payload:{
                error:error?.response?.data?.Message
            }})
        }
    }
}

export function* authSaga() {
    yield takeLatest(SIGN_IN, signInSaga);
}
