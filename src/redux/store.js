import { applyMiddleware, createStore } from 'redux'
import { myLogger } from './middlewares/myLogger'
import { rootReducer } from './rootReducer'



export const store = createStore(rootReducer, applyMiddleware(myLogger))