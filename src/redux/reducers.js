import { combineReducers } from "redux"
import { REGISTER_USER } from "./actions"

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

export default combineReducers({
    userReducer
})