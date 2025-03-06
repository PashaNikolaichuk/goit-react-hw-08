import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOutThunk } from "../auth/operations";

// 1. Оголошуєм початкове значення стану Redux
const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlices = createSlice({
  // ім'я цього slice.
  name: "contacts",
  //   початковий стан для tasks.
  initialState,
  //   об'єкт, який поки порожній, але сюди можна додавати логіку обробки стану, наприклад, додавання, видалення або оновлення контактів.
  reducers: {},
  // Додаємо обробку зовнішніх екшенів
  extraReducers: (builder) => {
    // якщо хтось виконує fetchData, злови цю операцію і використай ці дані з нашого Slices
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        //  action.payload потрапляє наша data
        //замість пустого масиву записуєм те шо прийшло з data
        state.contacts.items = action.payload;
        state.contacts.loading = false;
        state.contacts.error = null;
      })

      // addTask
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })

      // deleteContact
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload
        );
        state.contacts.loading = false;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.contacts.items = [];
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.contacts.loading = true;
          state.contacts.error = null;
        }
      )

      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.contacts.error = action.payload;
          state.contacts.loading = false;
        }
      );
  },
});

// contactsSlices.reducer: Основний reducer, який потрібно передати в store.
export const contactsReducer = contactsSlices.reducer;
