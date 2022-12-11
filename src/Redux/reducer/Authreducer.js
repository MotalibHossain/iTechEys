import {LoginSuccess, Logout} from "../actionType/AuthActionType"

const initState={
    IsAuthenticate:localStorage.getItem("IsAuthenticate"),
    UserInfo:localStorage.getItem("UserInfo")
}

const IsAuthenticateReducer=(state=initState, action)=>{
    switch(action.type){
        case LoginSuccess:
            return{
                IsAuthenticate:action.payload,
                UserInfo:action.payload
            }
        case Logout:
            return{
                IsAuthenticate:null,
                UserInfo:null
            }
        default:
            return state
    }
}
export default IsAuthenticateReducer