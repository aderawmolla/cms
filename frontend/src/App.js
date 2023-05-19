import { Routes, Route } from "react-router-dom";
import DashbordContent from "./components/admin/dashbordContent";
import DoctorComponent from "./components/admin/doctorComponent";
import AppointmentComponent from "./components/admin/appointmenComponent";
import PrescriptionComponent from "./components/admin/prescriptionComponent";
import AddPatient from "./views/registration/addPatient";
import AddDoctor from "./views/registration/addDoctor";
import AddAppointment from "./views/registration/addAppointment";
import Login from "./views/login/login";
import AdminDashbord from "./views/dashbord/adminDashbord";
import Home from "./views/home/home";
import DoctorDashbord from "./views/dashbord/doctorDashbord";
import DoctorContent from "./components/doctor/doctorContent";
import DoctorAppointmentComponent from "./components/doctor/doctorAppointmentComponent";
import DoctorPrescriptionComponent from "./components/doctor/prescription";
import ResponseLabratoryComponent from "./components/doctor/responseLabratoryComponent";
import PatientProfile from "./views/dashbord/profile/patientProfile";
import SingUp from "./views/login/signup";
import SingIn from "./views/login/singin";
import Payment from "./views/login/payment";
import Verify from "./views/login/verify";
import LabDoctorDashbord from "./views/dashbord/labDoctorDashbord";
import LabRequest from "./views/dashbord/labRequest";
import LabResult from "./views/dashbord/labResult";
import PatientComponent from "./components/patient/patientComponent";
import PatientHome from "./views/patient/patientComponent";
export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<DoctorDashbord />}>
          <Route path="" element={<DoctorContent />} />
          <Route path="labratory" element={<ResponseLabratoryComponent />} />
          <Route path="prescription" element={<DoctorPrescriptionComponent />} />
          <Route path="appointment" element={<DoctorAppointmentComponent />} />
        </Route>
        <Route path="/lab" element={<LabDoctorDashbord />}>
          <Route path="" element={<LabRequest/>} />
          <Route path="result" element={<LabResult />} />
        </Route>
       
        <Route path="/signIn" element={<Login />}>
          <Route path="" element={<SingIn />} />
          <Route path="signUp" element={<SingUp />} />
          <Route path="payment" element={<Payment />} />
       </Route>
        <Route path="/doctor" element={<DoctorComponent />} />
        <Route path="/patient" element={<PatientHome />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/adminDashbord/" element={<AdminDashbord />}>
          <Route path="" element={<DashbordContent />} />
          <Route path="patient" element={<PatientComponent/>} />
          <Route path="doctor" element={<DoctorComponent />} />
          <Route path="appointment" element={<AppointmentComponent />} />
          <Route path="prescription" element={<PrescriptionComponent />} />
          <Route path="addPatient" element={<AddPatient />} />
          <Route path="addDoctor" element={<AddDoctor />} />
          <Route path="addAppointment" element={<AddAppointment />} />
          <Route path="patientDetail" element={<PatientProfile/>} />
        </Route>
      </Routes>
    </>
  );
}
