import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePatient } from "../../redux/patientSlice";
import Swal from "sweetalert2";
import UpdatePatient from "../../views/update/updatePatient";

export default function PatientComponent() {
  const patients = useSelector((state) => state.patients.patients);
  const dispatch = useDispatch();
  // const [toBeUpdated, setToBeUpdated] = useState();

  const [showModal,setShowModal]=useState(false);
  const [patientToBeUpdated, setPatientToBeUpdated] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setPatientToBeUpdated(null);
  };
  const handleShow = (patient) => {
    setShowModal(true);
    setPatientToBeUpdated(patient);
  };
  useEffect(() => {
    console.log(patientToBeUpdated);
  }, [patientToBeUpdated]);

  if (!patients) {
    return <div>Loading...</div>; // Or any other appropriate loading state
  }
  return (
    <>
      <div className="mx-4 mt-4">
        <div className="flex flex-col items-end mb-10">
          <Link to="/adminDashbord/addPatient">
            <button
              onClick="popuphandler(true)"
              className="inline-flex items-end justify-end px-6 py-3 mt-4 mb-5 rounded focus:ring-2 bg-primary focus:ring-offset-2 focus:ring-indigo-400 sm:mt-0 primary hover:bg-indigo-600 focus:outline-none"
            >
              <p className="text-sm font-medium leading-none text-white">
                Add Patient
              </p>
            </button>
          </Link>
          <form className="flex items-center w-full">
            <label for="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search patients "
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5 mr-2 -ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </button>
          </form>
        </div>
        <div className="w-full rounded-lg shadow-xs">
          <div className="w-full overflow-visible">
            <table className="w-full sm:w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Patient Full Name</th>
                  <th className="py-3 pr-4">Associated Doctor</th>
                  <th className="px-4 py-3">Gender</th>
                  <th className="px-4 py-3">Id</th>
                  <th className="px-4 py-3">password</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-4">Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {patients.map((patient, index) => (
                  <>
                <React.Fragment key={index}>
                    {patientToBeUpdated && patientToBeUpdated.id === patient.id && (
                      <UpdatePatient
                        showModal={showModal}
                        handleClose={handleClose}
                        patientToBeUpdated={patientToBeUpdated}
                      />
                    )}
                    <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover object-center w-8 h-8 rounded-full "
                              src={patient.image}
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">
                              {patient.firstName} {patient.lastName}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{patient.doctorId}</td>

                      <td className="px-4 py-3 text-sm">{patient.gender}</td>
                      <td className="px-4 py-3 text-sm">{patient.id}</td>
                      <td className="px-4 py-3 text-sm">{patient.password}</td>
                      <td className="px-4 py-3 text-sm">{patient.contact}</td>
                      <td className="px-2 py-3">
                        <div className="inline-flex items-center space-x-3">
                          <button
                            title="Edit"
                            className="hover:text-black"
                            onClick={()=>{
                               handleShow(patient);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  dispatch(deletePatient(patient));
                                  Swal.fire(
                                    "Deleted!",
                                    "Your file has been deleted.",
                                    "success"
                                  );
                                }
                              });
                            }}
                            className="w-5 h-5"
                            x-data="{ tooltip: 'Delete' }"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6"
                              x-tooltip="tooltip"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                          <Link
                            to={`/adminDashbord/patient/${patient.id}`}
                            title="Edit"
                            className="text-blue-500 hover:text-blue-200"
                          >
                            Detail
                          </Link>
                        </div>
                      </td>
                    </tr>
                    </React.Fragment>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
