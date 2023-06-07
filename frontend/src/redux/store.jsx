import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../redux/patientSlice";
import doctorReducer from "../redux/doctorSlice";
import prescriptionReducer from "../redux/prescriptionSlice";
import diagnosisReducer from "../redux/diagnosisSlice"

export const store = configureStore({
  reducer: {
    patients: patientReducer,
    doctors: doctorReducer,
    prescriptions: prescriptionReducer,
    diagnosises: diagnosisReducer,
  },
});
