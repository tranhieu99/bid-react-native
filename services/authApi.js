import {postRequest} from './helpers'
export const postSignIn = (data) =>{
     return postRequest('/userlogin',data)
     .then((res)=>{
         return res
     })
}