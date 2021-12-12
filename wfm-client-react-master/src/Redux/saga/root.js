import {takeEvery} from 'redux-saga/effects'
import { loginHandler, getManagerEmpHandler, getWfmEmpHandler, updateManagerEmpHandler, updateSoftlockHandler } from './handlers'


export function* rootSaga(){
    yield takeEvery("LOGIN_ACTION",loginHandler)
    yield takeEvery("GET_MGR_EMP_ACTION",getManagerEmpHandler)
    yield takeEvery("GET_WFM_EMP_ACTION",getWfmEmpHandler)
    yield takeEvery("UPDATE_EMP_ACTION",updateManagerEmpHandler)
    yield takeEvery("UPDATE_LOCK_ACTION",updateSoftlockHandler)
}