import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { myLogger } from './middlewares/myLogger'
import { rootReducer } from './rootReducer'


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)))