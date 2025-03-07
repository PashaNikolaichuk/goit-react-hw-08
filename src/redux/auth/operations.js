import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  goitApi.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/users/signup", credentials);

      setAuthHeader(data.token);
      toast.success("Реєстрація успішна!");
      return data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Такий користувач вже існує!");
        return thunkAPI.rejectWithValue("Такий користувач вже існує!");
      }

      toast.error("Сталася помилка. Спробуйте ще раз!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("/users/login", credentials);
      setAuthHeader(data.token);
      toast.success("Вхід успішний)");
      return data;
    } catch (e) {
      toast.error("Неправильний email або пароль!");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await goitApi.post("/users/logout");
      clearAuthHeader();
      toast.success("Ви вийшли з акаунту!");
    } catch (e) {
      toast.error("Помилка виходу! Спробуйте ще раз.");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// потрібна для автоматичного відновлення стану авторизованого користувача при перезавантаженні сторінки.

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("token is not exist");
    }

    setAuthHeader(savedToken);
    try {
      const { data } = await goitApi.get("/users/current");

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
