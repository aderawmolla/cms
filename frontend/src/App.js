import { Routes, Route } from "react-router-dom";
import DashbordContent from "./components/admin/dashbordContent";
import PatientHome from "./components/patient/patientHome";
import PatientProfile from "./views/dashbord/profile/patientProfile";
import PatientComponent from "./components/admin/patientComponent";
import DoctorComponent from "./components/admin/doctorComponent";
import AppointmentComponent from "./components/admin/appointmenComponent";
import PrescriptionComponent from "./components/admin/prescriptionComponent";
import AddPatient from "./views/add/addPatient";
import AddDoctor from "./views/add/addDoctor";
import AddAppointment from "./views/add/addAppointment";
import Login from "./views/login/login";
import AdminDashbord from "./views/dashbord/adminDashbord";
import Home from "./views/home/home";
import PatientDetail from "./components/patient/patientDetail";
import DoctorDashbord from "./views/dashbord/doctorDashbord";
import DoctorContent from "./components/doctor/doctorContent";
import DoctorPrescriptionComponent from "./components/doctor/prescription";
import ResponseLabratoryComponent from "./components/doctor/responseLabratoryComponent";
import SingUp from "./views/login/signup";
import SingIn from "./views/login/singin";
import Payment from "./views/login/payment";
import LabDoctorDashbord from "./views/dashbord/labDoctorDashbord";
import LabRequest from "./views/dashbord/labRequest";
import LabResult from "./views/dashbord/labResult";
import DoctorDetail from "./components/doctor/doctorDetail";
import DoctorPrescription from "./components/prescription/doctorPrescription";
import LaboratoryPrescription from "./components/prescription/labPrescription";
import PaymentSuccess from "./views/login/paymentSuccess";
import PaginationDisplay from "./components/prescription/pagination/displayTemp";
import DoctorAppointmentComponent from "./components/doctor/doctorAppointmentComponent";
export default function App(){
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pagination" element={<PaginationDisplay />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess/>} />

        <Route path="/doctor" element={<DoctorDashbord />}>
          <Route path="" element={<DoctorContent />} />
          <Route path="labratory" element={<ResponseLabratoryComponent />} />
          <Route path="prescription" element={<DoctorPrescriptionComponent />} />
          <Route path="prescription/:prescriptionId" index element={<DoctorPrescription />} ></Route>
          <Route path="appointment" element={<DoctorAppointmentComponent />} />
        </Route>
        <Route path="/lab" element={<LabDoctorDashbord />}>
          <Route path="" element={<LabRequest/>} />
          <Route path="prescription" element={<DoctorPrescriptionComponent />} />
          <Route path="prescription/:laboratoryId/:prescriptionId" index element={<LaboratoryPrescription />} ></Route>
          <Route path="result" element={<LabResult />} />
        </Route>
        <Route path="/signIn" element={<Login />}>
          <Route path="" element={<SingIn/>} />
          <Route path="signUp" element={<SingUp />} />
          <Route path="payment" element={<Payment />} />
       </Route>
        {/* <Route path="/doctor" element={<DoctorComponent />} /> */}
        <Route path="/patient/:id" element={<PatientProfile/>} />
        <Route path="/adminDashbord/" element={<AdminDashbord />}>
          <Route path="" element={<DashbordContent />} />
          <Route path="patient" element={<PatientComponent/>} />
          <Route path="patient/:id" index element={<PatientProfile />} ></Route>
          <Route path="doctor" element={<DoctorComponent />} />
          <Route path="doctor/:doctorId" index element={<DoctorDetail />} ></Route>
          <Route path="appointment" element={<AppointmentComponent />} />
          <Route path="prescription" element={<PrescriptionComponent />} />
          <Route path="prescription/:doctorId/:prescriptionId" index element={<DoctorPrescription />} ></Route>
          <Route path="prescription/:laboratoryId/:prescriptionId" index element={<LaboratoryPrescription />} ></Route>
          <Route path="addPatient" element={<AddPatient />} />
          <Route path="addDoctor" element={<AddDoctor />} />
          {/* <Route path="addAppointment" element={<AddAppointment />} /> */}
          <Route path="addAppointment/:patientId" element={<AddAppointment />} />
        </Route>
      </Routes>
    </>
  );
}
