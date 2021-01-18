import Login from "./login";
import  reducers  from "../../reducers/login";
import sagas from "./sagas";
import * as actions from "./actions";
import * as constants from "../../constants/loginActionTypes";

export default {
    Login,
    reducers,
    sagas,
    actions,
    constants,
};