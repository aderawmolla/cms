import { createSlice } from "@reduxjs/toolkit";

import patientsData from "../models/patients.json";

import axios from 'axios'
function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

function calculateQuantity(patients) {
  let quantity = 0;
  for (const item of patients) {
    quantity += item.quantity;
  }
  return { quantity };
}
// const storedPatientData = localStorage.getItem("patients");
const response = await axios.get("http://localhost:5000/patients");
const data = response.data;
const quantity = data.length;
console.log(quantity)
const initialState = {
  patients: data,
  quantity: quantity,
};
    // Call the fetchData function to fetch the data and update the initial state
  
export const patientSlice = createSlice({
  name:"patients",
  initialState,
  reducers: {
    addPatient: (state, action) => {
      const itemIndex = state.patients.findIndex(
        (item) => item.username === action.payload.username
      );
      if (itemIndex === -1) {
        state.patients.push(action.payload);
         const response=  axios.post('http://localhost:5000/patients',action.payload).then(()=>{
            console.log(response.data)
 
        })
        state.quantity += 1;

      } else {
        state.patients[itemIndex].quantity += action.payload.quantity;
      }
      const { quantity } = calculateQuantity(state.patients);
      state.quantity = quantity;
      localStorage.setItem("patients", JSON.stringify(state));
    },
    deletePatient: (state, action) => {
      removeObjectWithId(state.patients, action.payload.id);
      const { quantity } = calculateQuantity(state.patients);
      state.quantity = quantity;
      localStorage.setItem("patients", JSON.stringify(state));
    },

    updatePatient: (state, action) => {
      const itemIndex = state.patients.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
      } else {
        removeObjectWithId(state.patients, action.payload.id);
        state.patients.push(action.payload);
      }
      const { quantity } = calculateQuantity(state.patients);
      state.quantity = quantity;
      localStorage.setItem("patients", JSON.stringify(state));
    },
  },
});

export const { addPatient, deletePatient, updatePatient }=patientSlice.actions;
export default patientSlice.reducer;
