import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../redux/patientSlice";
import doctorReducer from "../redux/doctorSlice";
import appointmentReducer from "../redux/appointmentSlice";

import prescriptionReducer from "../redux/prescriptionSlice";

export const store = configureStore({
  reducer: {
    patients: patientReducer,
    doctors: doctorReducer,
    appointments:appointmentReducer,
    prescriptions: prescriptionReducer
  },
});
