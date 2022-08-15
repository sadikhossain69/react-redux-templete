import { rootReducer } from "../rootReducer";

export const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`)
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcommingState = [action].reduce(rootReducer, store.getState())

    console.log("After:", JSON.stringify(upcommingState));

    return next(action)

}