import { Routes, Route, Outlet } from "react-router-dom";
import DashbordContent from "./components/dashbordContent";
import PatientComponent from "./components/patientComponent";
import DoctorComponent from "./components/doctorComponent";
import AppointmentComponent from "./components/appointmenComponent";
import PrescriptionComponent from "./components/prescriptionComponent";
import AddPatient from "./views/registration/addPatient";
import AddDoctor from "./views/registration/addDoctor";
import AddAppointment from "./views/registration/addAppointment";
import LogIn from "./views/login/login";
import Home from "./views/home/home";
import AdminDashbord from "./views/dashbord/adminDashbord";
import PatientProfile from "./views/dashbord/profile/patientProfile";
import SingUp from "./views/login/signup";
import SingIn from "./views/login/singin";
import Payment from "./views/login/payment";
import Verify from "./views/login/verify";
import PatientHome from "./views/patient/patientComponent";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/signIn" element={<LogIn />}>
          <Route path="" element={<SingIn />} />
          <Route path="signUp" element={<SingUp />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="/doctor" element={<DoctorComponent />} />
        <Route path="/patient" element={<PatientHome />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/adminDashbord/" element={<AdminDashbord />}>
          <Route path="" element={<DashbordContent />} />
          <Route path="patient" element={<PatientComponent />} />
          <Route path="doctor" element={<DoctorComponent />} />
          <Route path="appointment" element={<AppointmentComponent />} />
          <Route path="prescription" element={<PrescriptionComponent />} />
          <Route path="addPatient" element={<AddPatient />} />
          <Route path="addDoctor" element={<AddDoctor />} />
          <Route path="addAppointment" element={<AddAppointment />} />
          <Route path="patientDetail" element={<PatientProfile />} />
        </Route>
      </Routes>
    </>
  );
}
