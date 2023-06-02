import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../redux/patientSlice";
import doctorReducer from "../redux/doctorSlice";
import appointmentReducer from "../redux/appointmentSlice";
 import TestNameReducer from '../redux/testNameSlice'
import prescriptionReducer from "../redux/prescriptionSlice";
 import currentUser from "./currentUser";
export const store = configureStore({
  reducer: {
    patients: patientReducer,
    doctors: doctorReducer,
    appointments:appointmentReducer,
    prescriptions: prescriptionReducer,
    testNames:TestNameReducer,
    currentUser:currentUser
  },
});
