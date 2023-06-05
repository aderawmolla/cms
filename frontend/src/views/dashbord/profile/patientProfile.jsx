import { useState } from "react";
import Modal from "../../update/profileUpdateModal";
import EditPatientInfo from "../../update/editPersonalInformation";
import { Link } from "react-router-dom";

export default function PatientProfile({ patient }) {
  patient = {
    firstName: "Kidist",
    lastName: "Ketema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!",
    photo:
      "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000",
    doctorId: "doc1",
    gender: "Female",
    id: "takami1",
    password: "titi",
    contact: "0920000000",
    username: "titi",
    email: "tita@gmail.com",
    date: "24 jul, 1992",
    state: "Amhara",
    wereda: "Bahir Dar",
    kebele: "Poly",
    cardNumber: "patientCard1",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [patientData, setPatientData] = useState(patient);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (updatedInfo) => {
    console.log(updatedInfo);
    // Save the updated information to the database
    setIsModalOpen(false); // close the modal
  };

  return (
    <div className="h-full bg-gray-200 p-8">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div x-data="{ openSettings: false }" className="  mt-4 rounded">
          <div
            className="flex justify-end items-start w-full h-[250px]  rounded-t-lg"
            style={{
              backgroundImage:
                "url(https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg)",
            }}
          >
            <Link to="/" className="flex items-center m-2 text-xl  rounded-lg px-2 gap-2  bg-white  m hover:text-blue-100">
              Logout
              <span className="inline-flex mr-1">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
            alt=""
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">
                {patient.firstName} {patient.lastName}
              </p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {patient.wereda}, {patient.kebele}
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <button onClick={handleEdit}>Update Profile</button>
              </button>
            </div>
          </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col 2xl:w-1/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className="text-gray-700">
                    {patient.firstName} {patient.lastName}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Birthday:</span>
                  <span className="text-gray-700">{patient.date}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Registered:</span>
                  <span className="text-gray-700">
                    10 Jan 2022 (25 days ago)
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Mobile:</span>
                  <span className="text-gray-700">{patient.contact}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className="text-gray-700">{patient.email}</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Location:</span>
                  <span className="text-gray-700">
                    {patient.state}, {patient.wereda}, {patient.kebele}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl text-gray-900 font-bold">
                Patient History{" "}
              </h4>
              <div className="relative px-4">
                <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
                <div className="flex items-center w-full my-6 -ml-1.5">
                  <div className="w-1/12 z-10">
                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-11/12">
                    <p className="text-sm">Eye diagnostic with Dr.Kidist</p>
                    <p className="text-xs text-gray-500">3 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <EditPatientInfo
            patientInfo={patient}
            onSubmit={handleSubmit}
            onClose={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
}
