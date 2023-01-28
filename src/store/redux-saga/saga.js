import getData from "./watcher";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([getData()]);
  console.log("ali");
}

export default rootSaga;
