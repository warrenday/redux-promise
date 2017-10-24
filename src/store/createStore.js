import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

// Import stores
import { store as app } from './appPromise'

// Import middlewares 
import promiseMiddleware from './middleware/redux-promise'

// Setup store
const rootReducer = combineReducers({ app })
const middleware = applyMiddleware(thunk, promiseMiddleware)


// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const enhancers = composeEnhancers(middleware)

export default initialState => {
  return createStore(rootReducer, initialState, enhancers)
}