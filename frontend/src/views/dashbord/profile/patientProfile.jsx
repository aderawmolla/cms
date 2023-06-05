import {useEffect} from "react";
import appointements from "../../../models/appointement.json"
import prescriptions from "../../../models/prescription.json"

export default function PatientProfile() {

  const authPatientId = "takami2"
  const patientApt = appointements.filter(apt => {
    if (authPatientId === apt.patientId)
    return{
        apt
    }
  })
  const patientPrsc = prescriptions.filter(prsc => {
    if (authPatientId === prsc.patientId)
    return{
        prsc
    }
  })

  useEffect(() => {
    // console.log(patientApt);
    console.log(patientPrsc);

  },[patientPrsc])

  return (
    <div className="h-full bg-gray-200 p-8">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div
          x-data="{ openSettings: false }"
          className="  mt-4 rounded"
        >
          <div
            x-show="openSettings"
            onClick="openSettings = false"
            className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
            style={{ display: "none" }}
          >
            <div className="py-2 border-b">
              <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                Settings
              </p>
              <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">Share Profile</span>
              </button>
              <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">Block User</span>
              </button>
              <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">More Info</span>
              </button>
            </div>
            <div className="py-2">
              <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                Feedback
              </p>
              <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
                <span className="text-sm text-gray-700">Report</span>
              </button>
            </div>
          </div>
          <div className="w-full h-[250px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">Blen Abatua</p>
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
            <p className="text-sm text-gray-500">Bahir Dar, Poly</p>
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
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Message</span>
              </button>
            </div>
          </div>
        </div>

        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div className="w-full flex flex-col">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
              <ul className="mt-2 text-gray-700">
                <li className="flex border-y py-2">
                  <span className="font-bold w-24">Full name:</span>
                  <span className="text-gray-700">Blen Abatua</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Birthday:</span>
                  <span className="text-gray-700">24 Jul, 1992</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Registered:</span>
                  <span className="text-gray-700">
                    10 Jan 2022 (25 days ago)
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Mobile:</span>
                  <span className="text-gray-700">+25 192 164 4607</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Email:</span>
                  <span className="text-gray-700">blen@example.com</span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold w-24">Location:</span>
                  <span className="text-gray-700">Bahir Dar, Poly</span>
                </li>
              </ul>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 justify-between">
            <div className="flex-1 lg:col-span-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl text-gray-900 font-bold">Patient History </h4>
              <div className="relative px-4">
                <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
                {patientPrsc.map((prsc, index) => {
                    <div key={index} className="flex items-center w-full my-6 -ml-1.5">
                      <div className="w-1/12 z-10">
                        <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                      </div>
                      <div className="w-11/12">
                        <p className="text-sm text-black">{prsc.disease} diagnostic with {prsc.docId}</p>
                        <p className="text-xs text-gray-500">3 min ago</p>
                      </div>
                  </div>
                })}
              </div>
            </div>
            <div className="flex-1 lg:col-span-2 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl py-2 text-gray-900 font-bold px-4 font">Appointements </h4>
              <div className="relative px-4">
                <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>
                  <table className="min-w-full bg-white">
  <thead>
    <tr className="bg-blue-800 text-white">
      <th className="px-4 py-2">Doctor</th>
      <th className="px-4 py-2">Date</th>
      <th className="px-4 py-2">Office Number</th>
      <th className="px-4 py-2">Time</th>
      <th className="px-4 py-2">Status</th> {/* New column for status */}
    </tr>
  </thead>
  <tbody>
    {patientApt.map((apt, index) => {
      const currentDate = new Date(); // Current date and time
      const [mm, dd, yy] = apt.date.split('-'); // Splitting date into month, day, and year

      // Create a new date object with the correct format
      const aptDate = new Date(yy, mm - 1, dd);
      aptDate.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison
      currentDate.setHours(0, 0, 0, 0); // Set time to 00:00:00 for comparison

      const status = aptDate.getTime() > currentDate.getTime() ? 'Pending' : 'Closed'; // Compare dates

      return (
        <tr
          key={index}
          className={`text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
        >
          <td className="border px-4 py-2">{apt.docId}</td>
          <td className="border px-4 py-2">{apt.date}</td>
          <td className="border px-4 py-2">{apt.officeNo}</td>
          <td className="border px-4 py-2">{apt.time}</td>
          <td className="border px-4 py-2">{status}</td> {/* Display the status */}
        </tr>
      );
    })}
  </tbody>
</table>





              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
