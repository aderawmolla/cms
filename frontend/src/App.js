import { Routes, Route } from "react-router-dom";
import AdminDashbord from "./views/dashbord/adminDashbord";
import DashbordContent from "./components/dashbordContent";
import PatientComponent from "./components/patientComponent";
import DoctorComponent from "./components/doctorComponent";
import AppointmentComponent from "./components/appointmenComponent";
import PrescriptionComponent from "./components/prescriptionComponent";
import Login from "./views/login/login";
import Home from "./views/home/home";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route  element={<DashbordContent />} />
        <Route path="/doctor" element={<AdminDashbord />} />
        <Route path="/adminDashboard" element={<DoctorComponent />} />
        <Route path="/patient" element={<PatientComponent />} />
        <Route path="/appointment" element={<AppointmentComponent />} />
        <Route path="/prescription" element={<PrescriptionComponent />} />
      </Routes>
    </>
  );
}
