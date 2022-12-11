import {LoginSuccess, Logout} from "../actionType/AuthActionType"

export const IsAuthenticateAction=(value)=>{
    return{
        type:LoginSuccess,
        payload:value
    }
}
export const LogoutAction=()=>{
    return{
        type:Logout,
    }
}