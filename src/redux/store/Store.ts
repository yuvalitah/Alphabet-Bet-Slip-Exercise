import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "../reducers";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: RootReducer,
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
