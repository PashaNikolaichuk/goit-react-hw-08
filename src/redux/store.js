import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";

// configureStore створює магазин Redux.
export const store = configureStore({
  //reducer — це об'єкт, у якому вказані ред'юсери (функції для обробки стану).
  //   У цьому випадку є один ред'юсер tasksReducer, що відповідає за гілку стану tasks.
  reducer: {
    contacts: tasksReducer,
    filters: filterReducer,
    auth: authReducer,
  },
});
