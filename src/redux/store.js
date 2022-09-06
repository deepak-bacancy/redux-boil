import { configureStore } from '@reduxjs/toolkit'
import combReducer  from "./reducers/index";

const store = configureStore({
  reducer: combReducer
});

export default store;


