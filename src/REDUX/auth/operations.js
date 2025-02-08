import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectToken } from "../auth/selectors";

// axios.defaults.baseURL = "https://health-app-server-pjbp.onrender.com/health/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    try {
      const response = await axios.post(
        "https://health-app-server-pjbp.onrender.com/health/account/register",
        user
      );
      setAuthHeader(response.data.token);
      return response.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    const response = await axios.post(
      "https://health-app-server-pjbp.onrender.com/health/account/login",
      user
    );
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
    await axios.delete(
      "https://health-app-server-pjbp.onrender.com/health/account/logout"
    );
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
