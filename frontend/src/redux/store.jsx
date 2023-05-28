import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../redux/patientSlice";
import doctorReducer from "../redux/doctorSlice";
import prescriptionReducer from "../redux/prescriptionSlice";

export const store = configureStore({
  reducer: {
    patients: patientReducer,
    doctors: doctorReducer,
    prescriptions: prescriptionReducer
  },
});
