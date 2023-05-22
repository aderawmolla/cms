import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../redux/patientSlice";


export const store = configureStore({
    reducer: {
      patients: patientReducer
    },
  });