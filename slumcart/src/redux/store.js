import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import allReducer from './rootReducer'

const middleWare = [logger]
const store = createStore(allReducer, applyMiddleware(...middleWare))


export default store
















