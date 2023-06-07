import { createSlice } from "@reduxjs/toolkit";
import diagnosisData from "../models/diagnosis.json";
import Swal from "sweetalert2";

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

const storeddiagnosisData = localStorage.getItem("diagnosises");

const initialState =
  storeddiagnosisData !== null
    ? JSON.parse(storeddiagnosisData)
    :
     {
        diagnosises: diagnosisData,
      };

export const diagnosiseslice = createSlice({
  name: "diagnosises",
  initialState,
  reducers: {
    senddiagnosises: (state, action) => {
      const itemIndex = state.diagnosises.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.diagnosises.push(action.payload);
        Swal.fire("diagnosis Sent.", "Success");
      } else {
        console.log("not added");
      }
      localStorage.setItem("diagnosises", JSON.stringify(state));
    },

    sendBackdiagnosis: (state, action) => {
      const itemIndex = state.diagnosises.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
      } else {
        removeObjectWithId(state.diagnosises, action.payload.id);
        state.diagnosises.push(action.payload);
      }
      localStorage.setItem("diagnosises", JSON.stringify(state));
    },
  },
});

export const { senddiagnosises, sendBackdiagnosis } =
  diagnosiseslice.actions;
export default diagnosiseslice.reducer;
