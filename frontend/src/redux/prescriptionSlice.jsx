import { createSlice } from "@reduxjs/toolkit";
import prescriptionData from "../models/prescriptions.json";
import Swal from "sweetalert2";

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

const storedPrescriptionData = localStorage.getItem("prescriptions");

const initialState =
  storedPrescriptionData !== null
    ? JSON.parse(storedPrescriptionData)
    : {
        prescriptions: prescriptionData,
      };

export const prescriptionSlice = createSlice({
  name: "prescriptions",
  initialState,
  reducers: {
    sendPrescriptions: (state, action) => {
      const itemIndex = state.prescriptions.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.prescriptions.push(action.payload);
        Swal.fire("Prescription Sent.", "Success");
      } else {
        console.log("not added");
      }
      localStorage.setItem("prescriptions", JSON.stringify(state));
    },

    // sendBackPrescription: (state, action) => {
    //   removeObjectWithId(state.prescriptions, action.payload.id);
    //   localStorage.setItem("prescriptions", JSON.stringify(state));
    // },

    sendBackPrescription: (state, action) => {
      const itemIndex = state.prescriptions.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
      } else {
        removeObjectWithId(state.prescriptions, action.payload.id);
        state.prescriptions.push(action.payload);
      }
      localStorage.setItem("prescriptions", JSON.stringify(state));
    },
  },
});

export const { sendPrescriptions, sendBackPrescription } =
  prescriptionSlice.actions;
export default prescriptionSlice.reducer;
