const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR': // Login Error
            console.log('login error')
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS': // Login Success
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS': // Log Out Success
            console.log('signout success')
            return state;
        case 'SIGNUP_SUCCESS': // Sign Up Success
            console.log('signup success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR': // Sign Up Failure
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;