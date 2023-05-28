import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
// import prsc from "../../models/prescriptions.json";
import testNames from "../../models/testNames.json";
import { v4 as uuidv4 } from "uuid";
import { sendPrescriptions } from "../../redux/prescriptionSlice";

export default function PrescriptionModal({ showModal, handleClose, item }) {
  const patients = useSelector((state) => state.patients.patients);
  const dispatch = useDispatch();
  const authenticatedDoctorId = "doc1";

  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [patient, setPatient] = useState();
  const [doctor, setDoctor] = useState();
  const [selectedTests, setSelectedTests] = useState([]);

  const handleTestChange = (test) => {
    if (selectedTests.includes(test)) {
      setSelectedTests(selectedTests.filter((t) => t !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  const prescription = {
    id: uuidv4(),
    patientId: item.id,
    issueDate: date,
    confirmDate: "",
    docId: authenticatedDoctorId,
    description: description,
    status: "issued",
    results: selectedTests.map((selected) => {
      return {
        test_name: selected,
        values: "",
      };
    }),
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send prescription!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(sendPrescriptions(prescription));
      }
    });
    // dispatch(updatePatient(patient));
  };

  useEffect(() => {
    // localStorage.clear();
    console.log(prescription);
  }, [selectedTests]);

  return (
    <>
      {showModal && (
        <div className="fixed z-10 top-0 left-0 bg-gray-800 text-secondary-dark4  w-full h-full flex items-start justify-end gap-x-4 bg-opacity-40">
          <div className="flex flex-col justify-between overflow-y-auto top-0 max-w-[1800px] rounded-lg mx-auto my-16 pb-28 ssm:w-[400px] bg-white h-full  space-y-4">
            <div className="flex gap-16 bg-blue-500 text-white py-8 px-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold">KIDANE MIHRET CLINIC</h1>
                <h1 className="font-mono flex justify-center items-center font-bold text-xl text-center mb-10">
                  Fill the information and Send Prescription to a Laboratorian
                </h1>
              </div>
              <img className="w-24 h-24" src="/icons/logo1.png" alt="" />
            </div>
            <form className="mt-10 border-2 border-gray-200  py-10  w-full mx-2 ">
              <div className="w-full  px-6 pb-6  ">
                <label
                  className=" block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Test Description
                </label>
                <textarea
                  className="appearance-none flex items-start w-full h-32  text-blue-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="Write a short description and background about the patient."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 mx-3 mb-6 gap-8">
                <div className="w-full  px-3">
                  <label
                    className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Patient
                  </label>
                  <select
                    className="block appearance-none w-full  border border-gray-200 text-blue-500 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    value={patient}
                    onChange={(e) => setPatient(e.target.value)}
                  >
                    {patients.map((patient, index) => (
                      // patient.doctorId === authenticatedDoctorId &&
                      <option
                        key={index}
                        value={`${patient.firstName} ${patient.lastName}`}
                      >
                        {patient.firstName} {patient.lastName}{" "}
                        {patient.doctorId}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-500">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <div className="w-full  px-3">
                  <label
                    className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Issued Date
                  </label>
                  <input
                    className="appearance-none block w-full  text-blue-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="date"
                    placeholder="fill date in E.C"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full px-6">
                <h3 className="mb-4 text-sm font-bold text-blue-500 dark:text-white">
                  TO BE TESTED
                </h3>
                <ul className="w-full grid grid-cols-2 md:grid-cols-3 text-sm font-medium text-gray-900 bg-white  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  {testNames.map((test, index) => (
                    <li
                      key={index}
                      className="w-full  rounded-t-lg dark:border-gray-600"
                    >
                      <div className="flex items-center pl-3">
                        <input
                          id="vue-checkbox"
                          type="checkbox"
                          value=""
                          checked={selectedTests.includes(test)}
                          onChange={() => handleTestChange(test)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor={`test-${index}`}
                          className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {test}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full justify-between px-[4%] gap-16">
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
                  Send Prescription
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
