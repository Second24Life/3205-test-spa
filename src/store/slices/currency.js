import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios';

export const fetchCurrency = createAsyncThunk('currency/fetchCurrency', async () => {
  const { data } = await axios.get('/latest.json');
  return data.rates;
});

const initialState = {
  currency: {
    items: [],
    status: 'loading',
  },
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrency.pending]: (state) => {
      state.currency.items = [];
      state.currency.status = 'loading';
    },
    [fetchCurrency.fulfilled]: (state, action) => {
      state.currency.items = action.payload;
      state.currency.status = 'loaded';
    },
    [fetchCurrency.rejected]: (state) => {
      state.currency.items = [];
      state.currency.status = 'error';
    },
  },
});

export const currencyReducer = currencySlice.reducer;