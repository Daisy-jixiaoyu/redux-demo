import { takeEvery,put } from 'redux-saga/effects'
import {NEW_LIST} from './actionTypes'
import { getListAction } from './actionCreators'
import axios from 'axios'
function* mySaga(){
    yield takeEvery(NEW_LIST,getList)
}

function* getList(){
    const res = yield axios.get('/app/users/list/')
    const action = getListAction(res.data.list)
    yield put(action)
    console.log('getlist')
}

export default mySaga