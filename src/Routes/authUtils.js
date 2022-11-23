const RemoveAuthCredintial=(IsAuthenticate, UserInfo)=>{
    localStorage.removeItem(IsAuthenticate)
    localStorage.removeItem(UserInfo)

}
export default RemoveAuthCredintial