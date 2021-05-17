import { ActionTypes } from "./actionTypes"


export const getData = (data) => ({
    type: ActionTypes.SET_DATA,
    payload: data
})