import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectToken } from "../auth/selectors";

// axios.defaults.baseURL = "https://health-app-server-pjbp.onrender.com/health/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchCurrentUser = createAsyncThunk(
  "user/current",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = selectToken(state);

      if (!token) {
        return thunkApi.rejectWithValue("No token found");
      }

      setAuthHeader(token);

      const response = await axios.get(
        "https://health-app-server-pjbp.onrender.com/health/account/current"
      );
      return response.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateCurrentUser = createAsyncThunk(
  "user/update",
  async ({ accountId, data }, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = selectToken(state);

      if (!token) {
        return thunkApi.rejectWithValue("No token found");
      }

      setAuthHeader(token);
      console.log(accountId, data);

      const response = await axios.patch(
        `https://health-app-server-pjbp.onrender.com/health/account/${accountId}`,
        data
      );
      return response.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
