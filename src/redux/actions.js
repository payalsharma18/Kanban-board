export const REGISTER_USER = 'REGISTER_USER';
export const SET_TASKS = 'SET_TASKS';

export const registerUser = (userDetails)=>({
    type : REGISTER_USER,
    payload : userDetails
});
export const setTasks = (allTasks)=>({
    type : SET_TASKS,
    payload : allTasks
});
