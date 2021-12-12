const token= localStorage.getItem("token") ? localStorage.getItem("token") : "NA"
const usertype =  localStorage.getItem("usertype") ? localStorage.getItem("usertype") : "NA"
const username =  localStorage.getItem("username") ? localStorage.getItem("username") : "NA"

export const loginReducer=(state={username:username,token: token,usertype: usertype,message:""},action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log(action.data)
            return {...action.data,message:""};
        case "LOGOUT_SUCCESS":
            console.log(action.data)
            return {...action.data,message:""};
        case "LOGIN_FAILURE":
            console.log(action)
            return {...state,message:"Login Credentials incorrect"}
        default:
            return state
    }
}
