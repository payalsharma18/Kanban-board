import { combineReducers } from "redux"
import { REGISTER_USER, SET_TASKS } from "./actions"

const initialUserState = {
    users:[]    
}

const initialTaskState = {
    tasks:[]
}



export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };

        default:
            return state;
    }
};
export const taskReducer = (state = initialTaskState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };

        default:
            return state;
    }
};

export default combineReducers({
    userReducer,
    taskReducer
})
