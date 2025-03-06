import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth-data",
  whitelist: ["token"],
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

// configureStore створює магазин Redux.
export const store = configureStore({
  //reducer — це об'єкт, у якому вказані ред'юсери (функції для обробки стану).
  //   У цьому випадку є один ред'юсер tasksReducer, що відповідає за гілку стану tasks.
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: persistedReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
