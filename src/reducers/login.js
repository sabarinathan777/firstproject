const initialState = {
    success: false,
    email: '',
    password: ''
};

function loginReducer(state = initialState, action) {

    switch (action.type) {
        case 'success':
            return { ...state, success: true, ...action.payload }
        case 'failure':
        case 'logout':
             sessionStorage.removeItem("email");
             sessionStorage.removeItem("password");
            return { email: '', password: '', success: false }
        default:
            return state;
    }
};
export default loginReducer;