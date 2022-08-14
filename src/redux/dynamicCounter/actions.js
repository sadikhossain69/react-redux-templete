import { DDECREMENT, DINCREMENT } from "./actionTypes";

export const incrementCounter = (value) => {
    return {
        type: DINCREMENT,
        payload: value
    };
}

export const decrementCounter = (value) => {
    return {
        type: DDECREMENT,
        payload: value
    };
}