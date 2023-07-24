import { createSlice, configureStore } from "@reduxjs/toolkit";
const foods = createSlice({
  name: "food",
  initialState: [],
  reducers: {
    addfood(state, action) {},
  },
});

const Store = configureStore({
  reducer: {
    food_1: foods.reducer,
  },
});
export {Store}