import {createStore,applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
// 安装Redux Dev Tools
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store