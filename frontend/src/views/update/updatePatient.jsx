import React, { useState, useEffect } from 'react'
// import './add.js'
import doctors from "../../models/doctors.json"
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addPatient, updatePatient } from '../../redux/patientSlice.jsx';



export default function UpdatePatient({ showModal, handleClose, patientToBeUpdated }){

  const [firstName, setFirstName] = useState(patientToBeUpdated.firstName);
  const [lastName, setLastName] = useState(patientToBeUpdated.lastName);
  const [description, setDescription] = useState(patientToBeUpdated.description);
  const [assignedDoctor, setAssignedDoctor] = useState(patientToBeUpdated.doctorId);
  const [gender, setGender] = useState(patientToBeUpdated.gender);
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState(patientToBeUpdated.password);
  const [phone, setPhone] = useState(patientToBeUpdated.contact);
  const [userName, setUserName] = useState(patientToBeUpdated.userName);
  const [email, setEmail] = useState(patientToBeUpdated.email);
  const [date, setDate] = useState(patientToBeUpdated.date);
  const [state, setState] = useState(patientToBeUpdated.state);
  const [wereda, setWereda] = useState(patientToBeUpdated.wereda);
  const [kebele, setKebele] = useState(patientToBeUpdated.kebele);
  const [cardNumber, setCardNumber] = useState(patientToBeUpdated.cardNumber);
  const [selectedImage, setSelectedImage] = useState(patientToBeUpdated.photo);
  const [imagePreview, setImagePreview] = useState(patientToBeUpdated.photo);

  const dispatch = useDispatch();


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const patient =     {
    firstName: firstName,
    lastName: lastName,
    description: description,
    photo: selectedImage.name,
    doctorId: assignedDoctor,
    gender: gender,
    id:uuidv4(),
    password: password,
    contact: phone,
    username: userName,
    email: email,
    date: date,
    state: state,
    wereda: wereda,
    kebele: kebele,
    cardNumber: cardNumber       
};

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(uuidv4())
    console.log(firstName)
    console.log(lastName)
    console.log(description)
    console.log(selectedImage.name)
    console.log(assignedDoctor)
    console.log(gender)
    console.log(password)
    console.log(phone)
    console.log(userName)
    console.log(email)
    console.log(date)
    console.log(state)
    console.log(wereda)
    console.log(kebele)
    console.log(cardNumber)
    dispatch(updatePatient(patient))
  }

  useEffect(() => {
    console.log(patientToBeUpdated)
  }, [])


return(
<>        
{showModal && 
    <div className="fixed z-10 top-0 left-0 bg-gray-800 text-secondary-dark4  w-full h-full flex items-start justify-end gap-x-4 bg-opacity-40">
    <div className="flex flex-col justify-between overflow-y-auto top-0 max-w-[1200px] rounded-lg mx-auto my-16 pb-28 ssm:w-[400px] bg-white h-full  space-y-4 px-4 ">
    <form class="m-auto mt-10 border-2 border-gray-200 box-content p-10 w-full max-w-lg">
<h1 class="font-bold text-xl text-center mb-10">Update The Informations</h1>
  <div class="grid grid-cols-2 -mx-3 mb-6 gap-8">
  <div class="w-full  px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        First Name
      </label>
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="First Name"
      value={firstName}
      onChange={ (e) => setFirstName(e.target.value)}
      />
    </div>

    <div class="w-full  px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    
    <div class="w-full px-3  ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Gender
      </label>
      <div class="relative">
        <select class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          
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
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="Fill age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
      />
    </div>

    <div class="w-full px-3 mt-6">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Username
      </label>
      <input class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
      />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and </p> */}
    </div>

    <div class="w-full px-3 mt-6">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Password
      </label>
      <input class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="login password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
      />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and </p> */}
    </div>

    <div class="w-full px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
      email
      </label>
      <input class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
      />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and </p> */}
    </div>

    <div class="w-full  px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      Birth Date
      </label>
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="fill date in E.C"
            value={date}
            onChange={(e)=> setDate(e.target.value)}
      />
    </div>


    <div class="w-full  px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Card Number 
      </label>
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Fill Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
      />
    </div>

    <div class="w-full px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Phone Number
      </label>
      <input class="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Fill phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
      />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and </p> */}
    </div>
   

   
    
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">

  <div class="w-full md:w-1/3 px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
              value={state}
              onChange={(e) => setState(e.target.value)}
        >
          <option value="amhara">Amhara</option>
          <option value="oromia">Oromia</option>
          <option value="snnpr">SNNPR</option>
          <option value="tigray">Tigray</option>
          <option value="gambela">Gambala</option>
          <option value="somaliya">Somaliya</option>
          <option value="hareri">Hareri</option>
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
      <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Woreda"
            value={wereda}
            onChange={(e) => setWereda(e.target.value)}
      />
    </div>
    
    <div class="w-full md:w-1/3 px-3 ">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        kebele
      </label>
      <input class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="kebele"
            value={kebele}
            onChange={(e) => setKebele(e.target.value)}
      />
    </div>
  </div>
  <div class="w-full  px-3  pt-8">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Patient Description
      </label>
      <textarea class="appearance-none flex items-start w-full h-32  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Write a short description and background about the patient."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
      />
    </div>

    <div class="relative pt-8 m-4">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">Choose a doctor and assign to the patient</label>
        <select class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
              value={assignedDoctor}
              onChange={(e) => setAssignedDoctor(e.target.value)}
        >
          {
            doctors.map((doctor,index) => (
              <option>{doctor.firstName} {doctor.lastName}</option>
            ))
          }
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>

    <div class="mx-auto w-64 pt-8">
    <img class="mx-auto mt-12 h-52 w-52 rounded-lg border p-2 md:mt-0" src={imagePreview} alt="step" />
          <div class="m-4">
            <div class="flex w-full items-center justify-center">
              <label class="flex h-14 w-full cursor-pointer flex-col border-4 border-dashed border-gray-200 hover:border-gray-300 hover:bg-gray-100">
                <div class="mt-4 flex items-center justify-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                  </svg>

                  <p class="font-laonoto text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Choose Profile Picture</p>
                </div>
                <input type="file" class="opacity-0" value="" onChange={handleImageChange} />
              </label>
            </div>
          </div>
        </div>
    <div className='flex justify-around'>
  <button onClick={handleClose} type="" class="bg-red-500  text-white font-bold px-10 py-2 mt-5 rounded focus:outline-none shadow hover:bg-red-700 transition-colors">Cancel</button>
  <button onClick={handleSubmit} type="" class="bg-primary  text-white font-bold px-10 py-2 mt-5 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors">Update</button>

    </div>
</form>
    </div>
</div>
}
</>


);

}