import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveFormData: (state, action) => {
      state.formData = action.payload;
    },
    clearFormData: (state) => {
      state.formData = {};
    },
  },
});

export const { saveFormData, clearFormData } = formSlice.actions;
export const formReducer = formSlice.reducer;
export default formSlice;
