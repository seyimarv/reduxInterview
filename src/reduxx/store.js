import { createStore} from "redux"



import {rootReducer } from  './interviewReducer'




const store = createStore(rootReducer);


export default store

