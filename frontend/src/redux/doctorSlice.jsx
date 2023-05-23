import { createSlice } from "@reduxjs/toolkit";
import doctorsData from "../models/doctors.json";

function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

const storedDoctorData = localStorage.getItem("doctors");

const initialState =
  storedDoctorData.length !== 0
    ? JSON.parse(storedDoctorData)
    : 
    {
        doctors: doctorsData,
      };

export const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    addDoctor: (state, action) => {
      const itemIndex = state.doctors.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.doctors.push(action.payload);
        state.quantity += 1;
      } else {
        state.doctors[itemIndex].quantity += action.payload.quantity;
      }

      localStorage.setItem("doctors", JSON.stringify(state));
    },

    deleteDoctor: (state, action) => {
      removeObjectWithId(state.doctors, action.payload.id);
      localStorage.setItem("doctors", JSON.stringify(state));
    },

    updateDoctor: (state, action) => {
      const itemIndex = state.doctors.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
      } else {
        removeObjectWithId(state.doctors, action.payload.id);
        state.doctors.push(action.payload);
      }
      localStorage.setItem("doctors", JSON.stringify(state));
    },
  },
});

export const { addDoctor, deleteDoctor, updateDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
