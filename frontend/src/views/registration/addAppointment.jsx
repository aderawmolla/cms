import React from 'react'
import './add.js'
export default function AddAppointment(props){
return(
<>
{/* <!-- Code block starts --> */}
        
<form class="m-auto mt-10 border-2 border-gray-200 box-content p-10 w-full max-w-lg">
<h1 class="font-bold text-xl text-center mb-10">Add Appointment Form</h1>
  <div class="flex flex-wrap -mx-3 mb-6">
  
  <div class="w-full md:full px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
     Doctors's Name
      </label>
      <div class="relative">
        <select class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Abebe Alemu</option>
          <option>Samson Abebe</option>
          <option>Doctor Firew</option>
          <option>DOctor yinager</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>

    <div class="w-full mt-5 md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Patient's Card Number
      </label>
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Patients Card Number"/>
    </div>
    <div class="w-full px-3 md:w-1/2 mt-6">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Appointment Fee 
      </label>
      <input class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="number" placeholder="Fee for Appointment"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and </p> */}
    </div>

    <div class="flex flex-wrap -mx-3 mt-6 mb-10">
  </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Date
      </label>
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="fill date in E.C"/>
    </div>


    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Time  
      </label>
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="time" placeholder="Fill Identification Number"/>
    </div>
  </div>
  <button type="submit" class="bg-primary text-white font-bold px-10 py-2 mt-5 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Send Appointment</button>
</form>
</>
);

}