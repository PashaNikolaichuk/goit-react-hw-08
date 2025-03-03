import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";

// всі запити axios тепер автоматично починаються з цього URL.
// axios.defaults.baseURL = "https://connections-api.goit.global/";

//createAsyncThunk допомогає виконувати HTTP-запит
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get("/contacts");

      return data;
    } catch (error) {
      // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/contacts", newContact);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (taskId, thunkAPI) => {
    try {
      await goitApi.delete(`/contacts/${taskId}`);

      return taskId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
