import {  Routes, Route} from "react-router-dom";
import './App.css';
import AdminDashbord from "./views/dashbord/adminDashbord";
import DashbordContent from "./components/dashbordContent";
import PatientComponent from "./components/patientComponent";
import DoctorComponent from "./components/doctorComponent";
import AppointmentComponent from "./components/appointmenComponent"
import PrescriptionComponent from "./components/prescriptionComponent";
import AddPatient from "./views/registration/addPatient";
import AddDoctor from "./views/registration/addDoctor";
import AddAppointment from "./views/registration/addAppointment";
export default function App() {
      return ( 
    <>
      <Routes>
      {/* <Route path="/" element={<DoctorDashbord/>}> */}

        <Route path="/" element={<AdminDashbord/>}>
          <Route index element={<DashbordContent/>} />
          <Route path="/doctor" element={<DoctorComponent/>}/>
          <Route path="/patient" element={<PatientComponent/>}/>
          <Route path="/appointment" element={<AppointmentComponent/>}/>
          <Route path="/prescription" element={<PrescriptionComponent/>}/>
          <Route path="/addPatient" element={<AddPatient/>}/>
          <Route path="/addDoctor" element={<AddDoctor/>}/>
          <Route path="/addAppointment" element={<AddAppointment/>}/>


        </Route>
      </Routes>
     
      </>  
      );

}

