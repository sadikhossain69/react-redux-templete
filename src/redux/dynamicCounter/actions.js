import { DECREMENT, INCREMENT } from "./actionTypes";

export const incrementCounter = (value) => {
    return {
        type: INCREMENT,
        payload: value
    };
}

export const decrementCounter = (value) => {
    return {
        type: DECREMENT,
        payload: value
    };
}