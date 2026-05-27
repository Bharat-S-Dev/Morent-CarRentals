import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./slices/carSlice";
import authReducer from "./slices/authSlice";
import rentalReducer from "./slices/rentalSlice";

const store = configureStore({
  reducer: {
    car: carReducer,
    auth: authReducer,
    rental: rentalReducer,
  },
});

export default store;