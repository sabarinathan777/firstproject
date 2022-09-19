import {combineReducers} from 'redux';
import loginReducer from './login';
// other reducers needs to add here

const rootReducers = combineReducers({    
    loginDetails : loginReducer      
});
export default rootReducers;