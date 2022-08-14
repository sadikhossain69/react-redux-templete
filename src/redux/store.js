import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './rootReducer'

const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`)
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcommingState = [action].reduce(rootReducer, store.getState())

    console.log("After:", JSON.stringify(upcommingState));

    // return next(action)

}

export const store = createStore(rootReducer, applyMiddleware(myLogger))