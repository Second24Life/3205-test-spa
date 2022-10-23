import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: 'ru' }

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang(state, action) {
      state.value = action;
    },
  },
})

export const { changeLang } = langSlice.actions;
export const langReducer = langSlice.reducer;