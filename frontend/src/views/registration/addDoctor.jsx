import React, { useState, useEffect } from "react";
// import './add.js'
import specializations from "../../models/specializations.json";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addDoctor } from "../../redux/doctorSlice";

export default function AddDoctor({
  showModal,
  handleClose,
  patientToBeUpdated,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [wereda, setWereda] = useState("");
  const [kebele, setKebele] = useState("");
  const [selectedImage, setSelectedImage] = useState("ph.webp");
  const [imagePreview, setImagePreview] = useState("ph.webp");

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

  const patient = {
    firstName: firstName,
    lastName: lastName,
    photo: selectedImage.name,
    specialization: specialization,
    gender: gender,
    id: uuidv4(),
    email: email,
    password: password,
    contact: phone,
    // username: userName,
    // date: date,
    state: state,
    wereda: wereda,
    kebele: kebele,
  };

  const handleSubmit = async (event) => {
    console.log(patient);

    event.preventDefault();
    await dispatch(addDoctor(patient));

    await Swal.fire({
      icon: "success",
      title: "Doctor Added Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    console.log(patientToBeUpdated);
  }, []);

  return (
    <form className="m-auto mt-10 border-2 border-gray-200 box-content p-10 w-full max-w-lg">
      <h1 className="font-bold text-xl text-center mb-10">
        Kidane Mihret Clinic Doctor Registration Form
      </h1>
      <div className="grid grid-cols-2 -mx-3 mb-6 gap-8">
        <div className="w-full  px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="w-full  px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="w-full px-3  ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            Gender
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full px-3 ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="login password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="w-full px-3 ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            email
          </label>
          <input
            className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full px-3 ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Phone Number
          </label>
          <input
            className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="text"
            placeholder="Fill phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            State
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
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
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            City/Wereda
          </label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Woreda"
            value={wereda}
            onChange={(e) => setWereda(e.target.value)}
          />
        </div>

        <div className="w-full md:w-1/3 px-3 ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-zip"
          >
            kebele
          </label>
          <input
            className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="kebele"
            value={kebele}
            onChange={(e) => setKebele(e.target.value)}
          />
        </div>
      </div>

      <div className="relative pt-8 m-4">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor=""
        >
          Specialization
        </label>
        <select
          className="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          {specializations.specializations.map((item, index) => (
            <option>{item}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>

      <div className="mx-auto w-64 pt-8">
        <img
          className="mx-auto mt-12 h-52 w-52 rounded-lg border p-2 md:mt-0"
          src={`/images/${imagePreview}`}
          alt="step"
        />
        <div className="m-4">
          <div className="flex w-full items-center justify-center">
            <label className="flex h-14 w-full cursor-pointer flex-col border-4 border-dashed border-gray-200 hover:border-gray-300 hover:bg-gray-100">
              <div className="mt-4 flex items-center justify-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>

                <p className="font-laonoto text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                  Choose Profile Picture
                </p>
              </div>
              <input
                type="file"
                className="opacity-0"
                value=""
                onChange={handleImageChange}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around">
        <button
          onClick={handleClose}
          type=""
          className="bg-red-500  text-white font-bold px-10 py-2 mt-5 rounded focus:outline-none shadow hover:bg-red-700 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type=""
          className="bg-primary  text-white font-bold px-10 py-2 mt-5 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
}
