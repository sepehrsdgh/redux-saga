import fetchDataHandler from "./Handler";
import { takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { dataActions } from "../data-slice";

export function* getData() {
  yield takeLeading("data/fetchData", fetchDataHandler);
}

export default getData;
