import { put, call } from "@redux-saga/core/effects";

function* fetchDataHandler() {
  try {
    const response = yield call(
      fetch("https://jsonplaceholder.typicode.com/users")
    );
    console.log(response);
    yield put({ type: "pushData", payload: response });
  } catch (error) {
    yield put({ type: "errorData", payload: error.message });
  }
}

export default fetchDataHandler;
