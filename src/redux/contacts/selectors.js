import { createSelector } from "@reduxjs/toolkit";

// Витягуємо список контактів
export const selectContacts = (state) => state.contacts.tasks.item;
export const selectLoading = (state) => state.contacts.tasks.isLoading;
export const selectError = (state) => state.contacts.tasks.error;
export const selectFilter = (state) => state.filters.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts = [], filter = "") => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
