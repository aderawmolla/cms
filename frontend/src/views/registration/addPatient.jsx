import './add.js'
import axios from 'axios';
import React, { useState } from 'react';

export default function AddPatient(props){
    const [errorMessage,setErrorMessage]=useState("")
    const [successMessage,setSuccessMessage]=useState("")

    const [formData,setFormData]= useState(
      
      {
        firstName: '',
        lastName:'',
        age:'',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!",
        photo: "https://w7.pngwing.com/pngs/328/335/png-transparent-icon-user-male-avatar-business-person-profile.png",
        patientId: "doc2",
        gender: "Male",
        id:"takami2",
        password: "sami",
        contact: "0921644607",
        username:"titi",
        email:"",
        date:Date.now(),
        state: "Amhara",
        wereda: "Bahir Dar",
        kebele: "Poly",
        cardNumber: "patientCard1"  
      });
  
    // const handleChange = (e) => {
    //   setFormData({ ...formData,[e.target.name]: e.target.value });
    // };
    const handleChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(' http://localhost:5000/patients', formData);
        console.log(response.data);
        console.log("success patient registration")
        setSuccessMessage("patient registered successfully")
         
      } catch (error) {
        console.error(error);
        setErrorMessage("Unable to register patient try again")
      }
    };
  
  
return(
<>  
<form onSubmit={handleSubmit}  class="m-auto mt-10 border-2 border-gray-200 box-content p-10 w-full max-w-lg">

<h1 class="font-bold text-xl text-center mb-10">Kidane Mihret Patient Registration Form</h1>
  <div class="flex flex-wrap -mx-3 mb-6"> 
  <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        First Name
      </label>
      <input 
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="First Name"/>
   </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name"/>
    </div>
    
    <div class="w-full px-3  ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Gender
      </label>
      <div class="relative">
        <select  
        name="gender"
        value={formData.gender}
        onChange={handleChange} 
         class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>male</option>
          <option>Female</option>  
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>

    <div class="w-full px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Age
      </label>
      <input name="age"
        value={formData.age}
        onChange={handleChange} class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Fill age"/>
    </div>

    <div class="w-full px-3 mt-6">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Username
      </label>
      <input  name="username"
        value={formData.username}
        onChange={handleChange} class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="username"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and </p> */}
    </div>

    <div class="w-full px-3 mt-6">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Password
      </label>
      <input  name="password" value={formData.password} onChange={handleChange}
      class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="login password"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and </p> */}
    </div>

    <div class="w-full px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
      email
      </label>
      <input  name='email' value={formData.emaiil} onChange={handleChange} class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="email@gmail.com"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and </p> */}
    </div>
  
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
   <div class="w-full md:w-1/2 px-3">
     <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Date
      </label>
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="fill date in E.C"
            value={formData.date}
            onChange={handleChange}
      />
    </div>


    <div class="w-full  px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Card Number 
      </label>
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Fill Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
      />
    </div>

    <div class="w-full px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Phone Number
      </label>
      <input name="contact" value={formData.contact} onChange={handleChange} class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Fill phone number"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and </p> */}
    </div> 
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">

  <div class="w-full md:w-1/3 px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select name="state" value={formData.state} onChange={handleChange} class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Amhara</option>
          <option>Oromia</option>
          <option>SNNPR</option>
          <option>Tigray</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City/Wereda
      </label>
      <input name="wereda" value={formData.wereda} onChange={handleChange} class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Woreda"/>
    </div>
    
    <div class="w-full md:w-1/3 px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        kebele
      </label>
      <input name="kebele" value={formData.kebele} onChange={handleChange}  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="kebele"/>
    </div>
  </div>
  <button type="submit" class="bg-primary text-white font-bold px-10 py-2 mt-5 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Register Patient</button>
  {successMessage && <p class=" text-center   text-green-500 text-xl font-normal  max-w-full flex-initial"></p>}

</form>
</>
);

}