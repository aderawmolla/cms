import {  Routes, Route} from "react-router-dom";
import './App.css';
import AdminDashbord from "./views/dashbord/adminDashbord";
import DashbordContent from "./components/dashbordContent";
import PatientComponent from "./components/patientComponent";
import DoctorComponent from "./components/doctorComponent";
import AppointmentComponent from "./components/appointmenComponent"
import PrescriptionComponent from "./components/prescriptionComponent";
export default function App() {
      return ( 
    <>
      <Routes>
        <Route path="/" element={<AdminDashbord/>}>
          <Route index element={<DashbordContent/>} />
          <Route path="/doctor" element={<DoctorComponent/>}/>
          <Route path="/patient" element={<PatientComponent/>}/>
          <Route path="/appointment" element={<AppointmentComponent/>}/>
          <Route path="/prescription" element={<PrescriptionComponent/>}/>

        </Route>
      </Routes>
     
      </>  
      );

}

