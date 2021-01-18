import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { all } from "redux-saga/effects";
import history from "./utils/helpers/history";
import questions from "./reducers/questions";
import {answer} from "./reducers/answer";

const rootSaga = function*() {
  yield all([
    ...Login.sagas,
    ...Signup.sagas,
  ]);
};
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT" || "ADMINPANEL_OPEN" || "MAIN_PAGE") {
    state = undefined;
  }
  return combineReducers({
    routing: routerReducer,
    login: Login.reducers,
    signup: Signup.reducers,
    questions,
    answer,
  })(state, action);
};
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware,
        routerMiddleware(history)
    )
  )
);
sagaMiddleware.run(rootSaga);
export { store };
