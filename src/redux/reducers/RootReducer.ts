import { BetSlipReducer } from "./BetSlipReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "rootReducer",
  storage,
};

export const RootReducer = persistReducer(persistConfig, BetSlipReducer);
