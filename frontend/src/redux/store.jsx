import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../redux/patientSlice";
import doctorReducer from "../redux/doctorSlice";

export const store = configureStore({
  reducer: {
    patients: patientReducer,
    doctors: doctorReducer,
  },
});
