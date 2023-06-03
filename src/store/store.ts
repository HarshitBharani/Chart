import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "../components/Contact/Contact-components/contactSlice";

const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
