import { combineReducers } from 'redux';



import interviewReducer from './interviewReducer'





const rootReducer = combineReducers({
    interview: interviewReducer
});
  
export default rootReducer