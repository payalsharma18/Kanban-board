export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (userDetails)=>({
    type : REGISTER_USER,
    payload : userDetails
});