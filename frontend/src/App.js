import { Routes, Route, Outlet } from "react-router-dom";
import DashbordContent from "./components/dashbordContent";
import PatientComponent from "./components/patientComponent";
import DoctorComponent from "./components/doctorComponent";
import AppointmentComponent from "./components/appointmenComponent";
import PrescriptionComponent from "./components/prescriptionComponent";
import AddPatient from "./views/registration/addPatient";
import AddDoctor from "./views/registration/addDoctor";
import AddAppointment from "./views/registration/addAppointment";
import Login from "./views/login/login";
import Home from "./views/home/home";
import AdminDashbord from "./views/dashbord/adminDashbord";
import PatientProfile from "./views/dashbord/profile/patientProfile";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<DoctorComponent />} />
        <Route path="/adminDashbord/" element={<AdminDashbord />}>

          <Route path="" element={<DashbordContent />} />
          <Route path="patient" element={<PatientComponent />} />
          <Route path="doctor" element={<DoctorComponent />} />
          <Route path="appointment" element={<AppointmentComponent />} />
          <Route path="prescription" element={<PrescriptionComponent />} />
          <Route path="addPatient" element={<AddPatient />} />
          <Route path="addDoctor" element={<AddDoctor />} />
          <Route path="addAppointment" element={<AddAppointment />} />
          <Route path="patientDetail" elment={<PatientProfile />} />

        </Route>
      </Routes>
    </>
  );
}
