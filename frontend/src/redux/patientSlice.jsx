import { createSlice } from "@reduxjs/toolkit";
import patientsData from "../models/patients.json"

function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  
    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }
  
    return arr;
  }

  function calculateQuantity(patients){
    let quantity = 0;
    for (const item of patients) {
        quantity += item.quantity;
    }
    return { quantity};
  }

const initialState = {
    patients: patientsData,
    quantity: 3
};

export const patientSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {
        addPatient: (state, action) => {
            const itemIndex = state.patients.findIndex(
              (item) => item.id === action.payload.id
            );
            if (itemIndex === -1) {
              state.patients.push(action.payload);
              state.quantity += 1;
            } else {
              state.patients[itemIndex].quantity += action.payload.quantity;
            }
            const { quantity } = calculateQuantity(state.patients);
            state.quantity = quantity;
          },
      
        deletePatient: (state, action) => {
            removeObjectWithId(state.patients, action.payload.id);
            const { quantity } = calculateQuantity(state.patients);
            state.quantity = quantity;
          },

        updatePatient: (state, action) => {
            const itemIndex = state.patients.findIndex(
                (item) => item.id === action.payload.id
              );
              if (itemIndex === -1) {
                state.patients.push(action.payload);
                state.quantity += 1;
              } else {
                state.patients[itemIndex].quantity += action.payload.quantity;
                state.patients.push(action.payload);
                state.quantity += 1;
              }
              const { quantity } = calculateQuantity(state.patients);
              state.quantity = quantity;
        }
          
    }
})


export const {addPatient, deletePatient, updatePatient} = patientSlice.actions;
export default patientSlice.reducer;