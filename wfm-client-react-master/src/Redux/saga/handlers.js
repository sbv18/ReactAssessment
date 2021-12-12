import axios from 'axios'
import {call,put} from 'redux-saga/effects'


export function* loginHandler(action){
    try{
 let  result = yield call(axios.post,"http://localhost:8000/users/signin",action.data)
 console.log(result.data)

 localStorage.setItem("username",result.data.username)
 localStorage.setItem("usertype",result.data.usertype)
 localStorage.setItem("token",result.data.token)

 yield put({type:"LOGIN_SUCCESS",data: 
  {
     username:result.data.username,
     usertype:result.data.usertype,
     token: result.data.token
  }})
    } 
  catch(e){
      yield put({type:"LOGIN_FAILURE"})
  }
 
}

export function* getManagerEmpHandler(action){
  try{
let  result = yield call(axios.get,`http://localhost:8000/api/employees/${action.data.username}`, {headers: { Authorization: `Bearer ${action.data.token}` }})
console.log(result.data)

yield put({type:"GET_EMP_SUCCESS",data: 
{
   managerData: result.data
   
}}) 
  } 
catch(e){
    yield put({type:"LOGIN_FAILURE"})
}

}

export function* getWfmEmpHandler(action){
  try{
let  result = yield call(axios.get,`http://localhost:8000/api/softlock/${action.data.username}`, {headers: { Authorization: `Bearer ${action.data.token}` }})
console.log(result.data)

yield put({type:"GET_EMP_SUCCESS",data: 
{
   managerData: result.data
}})
  } 
catch(e){
    yield put({type:"LOGIN_FAILURE"})
}
}

export function* updateManagerEmpHandler(action){
  try{
      let  result = yield call(axios.put,`http://localhost:8000/api/employees/${action.data.selectedEmployee}`, action.data, {headers: { Authorization: `Bearer ${action.data.token}` }})
      console.log(result.data)

      yield put({type:"UPDATE_EMP_SUCCESS",data: 
      {
        openModal: false,
        managerData: result.data
      }})
  } 
  catch(e){
    yield put({type:"LOGIN_FAILURE"})
  }
}

export function* updateSoftlockHandler(action){
  try{
      let  result = yield call(axios.put,`http://localhost:8000/api/softlock/${action.data.selectedSoftlockId}`, action.data, {headers: { Authorization: `Bearer ${action.data.token}` }})
      console.log(result.data)

      yield put({type:"UPDATE_LOCK_SUCCESS",data: 
      {
        openModal: false,
        managerData: result.data,
      }})
  } 
  catch(e){
    yield put({type:"LOGIN_FAILURE"})
  }
}
