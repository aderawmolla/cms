
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
function removeObjectWithId(arr, id) {
  const objWithIdIndex = arr.findIndex((obj) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

function calculateQuantity(doctors) {
  let quantity = 0;
  for (const item of doctors) {
    quantity += item.quantity;
  }
  return { quantity };
}
// const storedPatientData = localStorage.getItem("patients");
const response = await axios.get("http://localhost:5000/doctors");
const data = response.data;
data.reverse();
const quantity = data.length;
console.log(quantity)
const initialState = {
  doctors: data,
  quantity: quantity,
};
    // Call the fetchData function to fetch the data and update the initial state
  
export const doctorSlice = createSlice({
  name:"doctors",
  initialState,
  reducers: {
    addDoctor: (state, action) => {
      const itemIndex = state.doctors.findIndex(
        (item) => item.username === action.payload.username
      );
      if (itemIndex === -1) {
        state.doctors.push(action.payload);
        state.quantity += 1;
         const response=  axios.post('http://localhost:5000/doctors',action.payload).then(()=>{
          console.log(response.data)
 
        })

      } else {
        state.doctors[itemIndex].quantity += action.payload.quantity;
      }
      const { quantity } = calculateQuantity(state.doctors);
      state.quantity = quantity;
      localStorage.setItem("doctors", JSON.stringify(state));
    },
    deleteDoctor:  (state, action) => {
      try {
        axios.delete(`http://localhost:5000/doctors/${action.payload.id}`);
        console.log('doctor deleted successfully');
        // Optionally perform any additional actions after deletion
      } catch (error) {
        console.error('Error deleting patient:', error);
        throw error; // Rethrow the error or handle it as needed
      }
      removeObjectWithId(state.doctors, action.payload.id);
      const { quantity } = calculateQuantity(state.doctors);
      state.quantity = quantity;
      localStorage.setItem("doctors", JSON.stringify(state));
    },

    updateDoctor:(state, action) => {
      const itemIndex = state.doctors.findIndex(
        (item) => item.id=== action.payload.id
      );
      if (itemIndex === -1) {
      } else {
          axios.put(`http://localhost:5000/doctors/${action.payload.id}`,action.payload); 
        removeObjectWithId(state.docors, action.payload.id);
        state.patients.push(action.payload);
      }
      const { quantity } = calculateQuantity(state.doctors);
      state.quantity = quantity;
      localStorage.setItem("doctors", JSON.stringify(state));
    },
  },
});

export const { addDoctor, deleteDoctor, updateDoctor}=doctorSlice.actions;
export default doctorSlice.reducer;
