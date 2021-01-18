import { put, takeEvery, call } from "redux-saga/effects";
import * as constants from "../../constants/signupActionTypes";
import * as actions from "./actions";
import * as service from "../../utils/services";
import {store} from "../../store";
import {push} from "react-router-redux";

function* signupAttempt(action) {
    const {params } = action.payload;
    try {
        yield put(actions.loading(true));
        const response = yield call(service.makePostReq,{url:'/login',data:params});
        alert('თქვენ წარმატებით დარეგისტრირდით! შეგიძლიათ შეხვიდეთ თქვენს გვერდზე :) ');
        store.dispatch(push("/login"));
    } catch (error) {
        yield put(actions.failure(true,error.response.data.error));
        alert(error.response.data.error)
    }finally {
        yield put(actions.loading(false));
    }
}
function* signupAttemptSaga() {
  yield takeEvery(constants.ATTEMPT, signupAttempt);
}
export default [signupAttemptSaga()];

