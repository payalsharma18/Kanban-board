import { combineReducers } from "redux";
import { userReducer, taskReducer } from "./reducers";
const rootReducers = combineReducers({
    userReducer,
    taskReducer
})

export default rootReducers;
