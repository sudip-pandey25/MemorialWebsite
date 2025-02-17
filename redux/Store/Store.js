import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "../formData/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
