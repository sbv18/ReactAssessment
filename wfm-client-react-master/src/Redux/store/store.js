import {combineReducers,applyMiddleware,createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { loginReducer } from '../reducers/reducer'
import { managerEmpReducer} from '../reducers/managerEmpReducer.js'
import { rootSaga } from '../saga/root'



const appData = combineReducers({
    loginData: loginReducer,
    empData: managerEmpReducer
})

const sagaMiddleware=createSagaMiddleware()
export const store=createStore(appData,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

