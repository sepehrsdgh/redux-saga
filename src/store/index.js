import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux-saga/saga";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import dataSlice from "./data-slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    data: dataSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
