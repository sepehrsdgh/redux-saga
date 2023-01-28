import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    error: false,
  },
  reducers: {
    pushData(state, action) {
      state.items.push(action.payload);
    },
    // fetchData(state, action) {
    //   const response=await fetch("https://jsonplaceholder.typicode.com/users");
    //   const data=await response.json();
    // },
    errorData(state, action) {
      state.error = true;
    },

    fetchData() {
      console.log("ali");
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
