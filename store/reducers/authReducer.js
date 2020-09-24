import * as constant from '../../screens/SignInScreen/constants'

const initialState = {
    loading: false,
    data:{},
    error:false
}
const authReducer = (state=initialState,action) =>{
    switch(action.type){
        case constant.SIGN_IN:
            return{
                ...state,
                loading: true,
                data:{},
                error:false
            }
        case constant.SIGN_IN_SUCCESS:
            return{
                ...state,
                loading: false,
                data:action.payload,
                error:false
            }
        case constant.SIGN_IN_ERROR:
            return{
                ...state,
                loading: false,
                data:{},
                error:action?.payload?.error
            }
        case constant.CLEAR_ERR_MSG:
            return{
                ...state,
                error:false
            }
        default:
            return state
    }
}
export default authReducer