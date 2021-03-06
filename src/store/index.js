import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import mySaga from './sagas'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware=createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__({}) : compose
// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
const store = createStore(
    reducer,
    enhancer
)
sagaMiddleware.run(mySaga)
export default store;