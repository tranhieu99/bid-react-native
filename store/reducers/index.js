import { combineReducers } from 'redux';
import test from './test'
import authReducer from './authReducer'
const allReducers = combineReducers({
test,
authReducer
});
export default allReducers;
