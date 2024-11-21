import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectToken } from "../auth/selectors";

axios.defaults.baseURL = "http://localhost:3000/health/"; // ! Change to official base URL

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    try {
      const response = await axios.post("/account/register", user);
      setAuthHeader(response.data.token);
      return response.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    const response = await axios.post("/account/login", user);
    setAuthHeader(response.data.token);
    return response.data.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const state = thunkApi.getState();
    const token = selectToken(state);

    if (!token) {
      return thunkApi.rejectWithValue("No token found");
    }

    setAuthHeader(token);
    await axios.delete("/account/logout");
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
