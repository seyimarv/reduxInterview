import {ActionTypes} from './actionTypes'

const INITIAL_STATE = {
    currentData: []
}


export const rootReducer = (state= INITIAL_STATE, action) => {
      switch(action.type) {
          case ActionTypes.SET_DATA: 
          return {
              ...state,
              currentData: action.payload
          }
          default:
              return state
      }
  }



