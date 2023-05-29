import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { deleteAppointment } from '../../redux/appointmentSlice';
import { HiOutlineMail, HiOutlineRefresh } from 'react-icons/hi';

import UpdateAppointment from '../../views/update/updateAppointment';

export default function AppointmentComponent(props) {
  const appointments=useSelector((state) => state.appointments.appointments);
  const  dispatch = useDispatch();
  // const [toBeUpdated, setToBeUpdated] = useState();
  const [showModal,setShowModal]=useState(false);
  const [appointmentToBeUpdated, setAppointementToBeUpdated] = useState(null);
  const handleClose = () => {
    setShowModal(false);
    setAppointementToBeUpdated(null);
  };
  const handleShow=(appointment) => {
    setShowModal(true);
    setAppointementToBeUpdated(appointment);
  };
  useEffect(() => {
    console.log(appointmentToBeUpdated);
  }, [appointmentToBeUpdated]);

  if (!appointments) {
    return <div>Loading...</div>; // Or any other appropriate loading state
  }
  return (
   <>
      <div class="mt-4 mx-4">
        <div class="flex flex-col items-end mb-10">
          {/* <Link to="/adminDashbord/addAppointment">
            <button onclick="popuphandler(true)" class="focus:ring-2  mb-5 bg-primary mb-5 focus:ring-offset-2 focus:ring-indigo-400 mt-4 sm:mt-0 inline-flex items-end justify-end px-6 py-3 primary hover:bg-indigo-600 focus:outline-none rounded">
              <p class="text-sm font-medium leading-none text-white">Add Appointment</p>
            </button>
          </Link> */}
          <form class="flex w-full items-center">
            <label for="voice-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Appointment history" required />

            </div>
            <button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-primary rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
          </form>
        </div>
        <div class="w-full  rounded-lg shadow-xs">
          <div class="w-full   overflow-visible">
            <table class="w-full sm:w-full">
              <thead>
                <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th class="px-4 py-3">PatientName</th>
                  <th class="px-4 py-3">Card Number</th>
                  <th class="px-4 py-3">Appointed Doctor</th>
                  <th class="px-4 py-4">Fee</th>
                  <th class="px-4 py-4">Date</th>
                  <th class="px-4 py-4">Time</th>
                  <th class="px-4 py-4">Location</th>
                  <th class="px-4 py-4">Status</th>
                  <th class="px-4 py-4">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">

            
              {appointments.map((appointment, index) => (
                 < React.Fragment key={index}>
                 {appointmentToBeUpdated && appointmentToBeUpdated.id==appointment.id && (
                     <UpdateAppointment
                      showModal={showModal}
                      handleClose={handleClose}
                      appointmentToBeUpdated={appointmentToBeUpdated}
                      />
                    )}
                   <tr className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400">
                   <td className="px-4 py-3">
                     <div className="flex items-center text-sm">
                       <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                         <img
                           className="object-cover w-full h-full rounded-full"
                           src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                           alt=""
                           loading="lazy"
                         />
                         <div
                           className="absolute inset-0 rounded-full shadow-inner"
                           aria-hidden="true"
                         ></div>
                       </div>
                       <div>
                         <p className="font-semibold">Patient {appointment.patientId}</p>
                       </div>
                     </div>
                   </td>
                   <td className="px-4 py-3 text-sm">{appointment.cardNumber}</td>
                   <td>
                     <div>
                       <p className="font-semibold">Doctor {appointment.doctorId}</p>
                     </div>
                   </td>
                   <td className="px-4 py-3 text-sm">{appointment.appointmentFee}</td>
                   <td className="px-4 py-3 text-sm">{appointment.date}</td>
                   <td className="px-4 py-3 text-sm">{appointment.time}</td>
                   <td className="px-4 py-3 text-sm">{appointment.location}</td>

                   <td className="px-4 py-3 text-xs">
                     <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                       {" "}
                       {/* Confirmed */}
                       Scheduled{" "}
                     </span>
                   </td>             
                   <td className="px-2 py-3">
                     <div className="inline-flex items-center space-x-3">
                     <Link to={`/adminDashbord/addAppointment/${appointment.patientId}`} class="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-1 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700">Resend</Link>
                       <button
                          title="Edit"
                          className="hover:text-black"
                          onClick={ ()=>{
                             console.log(appointment.id)
                             handleShow(appointment);
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
                          className="w-5 h-5"
                          x-data="{ tooltip: 'Delete' }"
                          href="#"
                          title="Delete"
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
                                dispatch(deleteAppointment(appointment));
                                Swal.fire(
                                  "Deleted!",
                                  "The doctor has been deleted.",
                                  "success"
                                );
                              }
                            });
                          }}
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
                       
                      </div>
                   </td>
                 </tr> 

                 </React.Fragment>
                ))}
            
              </tbody>
            </table>
          </div>
          <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
            <span class="flex items-center col-span-3"> Showing 21-30 of 100 </span>
            <span class="col-span-2"></span>
            {/* <!-- Pagination --> */}
            <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul class="inline-flex items-center">
                  <li>
                    <button class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                      <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
                  </li>
                  <li>
                    <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
                  </li>
                  <li>
                    <button class="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
                  </li>
                  <li>
                    <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
                  </li>
                  <li>
                    <span class="px-3 py-1">...</span>
                  </li>
                  <li>
                    <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
                  </li>
                  <li>
                    <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
                  </li>
                  <li>
                    <button class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                      <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>
      </div>
    </>);

}