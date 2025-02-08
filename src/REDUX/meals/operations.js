import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectToken } from "../auth/selectors";

// axios.defaults.baseURL = "https://health-app-server-pjbp.onrender.com/health/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchMeals = createAsyncThunk(
  "meals/fetchMeals",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = selectToken(state);

      if (!token) {
        return thunkApi.rejectWithValue("No token found");
      }

      setAuthHeader(token);

      const response = await axios.get(
        "https://health-app-server-pjbp.onrender.com/health/meals"
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addMeals = createAsyncThunk(
  "meals/addMeals",
  async (meal, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = selectToken(state);

      if (!token) {
        return thunkApi.rejectWithValue("No token found");
      }

      setAuthHeader(token);

      const response = await axios.post(
        "https://health-app-server-pjbp.onrender.com/health/meals",
        meal
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteMeals = createAsyncThunk(
  "meals/deleteMeals",
  async (transactionId, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = selectToken(state);

      if (!token) {
        return thunkApi.rejectWithValue("No token found");
      }

      setAuthHeader(token);

      await axios.delete(
        `https://health-app-server-pjbp.onrender.com/health/meals/${transactionId}`
      );
      return transactionId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
