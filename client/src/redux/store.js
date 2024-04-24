import { configureStore } from "@reduxjs/toolkit";
import sampleReducer from "./sampleslice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    sample: sampleReducer,
    user:userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
