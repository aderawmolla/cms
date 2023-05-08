import React from "react";
import DiseaseComponent from "./diseaseComponent";
import EventComponent from "./eventComponent";
import PatientRecord from "./patientRecord";
export default function DashbordContent(props) {
  return (
    // <!-- This is an example component -->
    <>
      <main>
        <div className="pt-6 px-4">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <div className="flex-shrink-0 mt-3">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    $45,385
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Total Service charge
                  </h3>
                </div>
                <div className="flex-shrink-0 mt-3">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    $5,385
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    This week Service charge
                  </h3>
                </div>
              </div>
              <div id="main-chart"></div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Recent Health Events
                  </h3>
                  <span className="text-base font-normal text-gray-500">
                    This is a list of recent events
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="/"
                    className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                  >
                    View all
                  </a>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <div className="overflow-x-auto rounded-lg">
                  <div className="align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Event
                            </th>
                            <th
                              scope="col"
                              className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Date & Time
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <EventComponent />
                          <EventComponent />
                          <EventComponent />
                          <EventComponent />
                          <EventComponent />
                          <EventComponent />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    23
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    New patients this week
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  14.6%
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    20
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    New Appointments of this week
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  32.9%
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    385
                  </span>
                  <h3 className="text-base font-normal text-gray-500">
                    Prescription of this week
                  </h3>
                </div>
                <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  5%
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">
                  New Registered Patients{" "}
                </h3>
                <a
                  href="/"
                  className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
                >
                  View all
                </a>
              </div>

              {/* new patient component */}

              <div className="mt-4 mx-4">
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                  <div className="w-full overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                          <th className="px-4 py-3">Patient Full Name</th>
                          <th className="px-4 py-3">Gender</th>
                          <th className="px-4 py-3">Id</th>
                          <th className="px-4 py-3">Contact</th>
                          <th className="px-4 py-3">Date</th>
                          <th className="px-4 py-4">Actions</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                        <PatientRecord />
                        <PatientRecord />
                        <PatientRecord />
                        <PatientRecord />
                        <PatientRecord />
                      </tbody>
                    </table>
                  </div>
                  <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="flex items-center col-span-3">
                      {" "}
                      Showing 21-30 of 100{" "}
                    </span>
                    <span className="col-span-2"></span>
                    {/* <!-- Pagination --> */}
                    <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                      <nav aria-label="Table navigation">
                        <ul className="inline-flex items-center">
                          <li>
                            <button
                              className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                              aria-label="Previous"
                            >
                              <svg
                                aria-hidden="true"
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </li>
                          <li>
                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                              1
                            </button>
                          </li>
                          <li>
                            <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                              2
                            </button>
                          </li>

                          <li>
                            <button
                              className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                              aria-label="Next"
                            >
                              <svg
                                className="w-4 h-4 fill-current"
                                aria-hidden="true"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clip-rule="evenodd"
                                  fill-rule="evenodd"
                                ></path>
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </span>
                  </div>
                </div>
              </div>

              {/* new patient component */}
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
                Last 7 Days Patient and Disese Statistics
              </h3>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                        Disease
                      </th>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                        Number of Patients
                      </th>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                        percentage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <DiseaseComponent />
                    <DiseaseComponent />
                    <DiseaseComponent />
                    <DiseaseComponent />
                    <DiseaseComponent />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
    </>
  );
}
