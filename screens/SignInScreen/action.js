import {CLEAR_ERR_MSG,SIGN_IN} from './constants'
export const signIn = (payload) =>{
    return{
        type: SIGN_IN,
        payload:payload
    }
}
export const clearMsg = () =>{
    return{
        type: CLEAR_ERR_MSG,
    }
}