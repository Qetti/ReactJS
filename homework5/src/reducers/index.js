import {combineReducers} from 'redux';
import questions from "./questions";
import {answer} from "./answer";
import login from "./login";
import signup from "./signup";


export default combineReducers({
    questions,
    answer,
    login,
    signup,
});