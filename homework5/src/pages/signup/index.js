import Signup from "./signup";
import  reducers  from "../../reducers/signup";
import sagas from "./sagas";
import * as actions from "./actions";
import * as constants from "../../constants/signupActionTypes";

export default {
    Signup,
    reducers,
    sagas,
    actions,
    constants,
};