import "./App.css"
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import FrontPage from "./Pages/GlobalFiles/FrontPage";
import Add_Doctor from './Pages/Admin/Add_Doctor'
import AddBeds from "./Pages/Admin/Add_Beds"
import Add_Admin from  "./Pages/Admin/Add_Admin"
import Add_Ambulance from  "./Pages/Admin/Add_Ambulance";
import Add_Nurse from './Pages/Admin/Add_Nurse';
import Beds_Rooms from "./Pages/Admin/Beds_Rooms";
import Check_Appointment from "./Pages/Doctor/Check_Appointment";
import Discharge_and_Create_Slip from "./Pages/Doctor/Discharge_and_Create_Slip";
import Doctor_Profile from "./Pages/Doctor/Doctor_Profile";
import Patient_Details from "./Pages/Doctor/Patient_Details";
import Add_Patient from "./Pages/Nurse/Add_Patient";
import Book_Appointment from "./Pages/Nurse/Book_Appointment";
import Nurse_Profile from "./Pages/Nurse/Nurse_Profile"
import Login from './components/Login/Login';
import AllReport from "./Pages/Doctor/AllReport";




const App = () =>{
  return (
    <> 
     <Router>
      <Routes>

        {/* Main Part */}
        <Route path="/dashboard" element={<FrontPage/>}/>
        <Route path="/" element={<Login />} />

        {/* Patient Part */}
        <Route path="/addoctor" element={<Add_Doctor />}/>
        <Route path="/addambulance" element={<Add_Ambulance />} />
        <Route path="/addnurse" element={<Add_Nurse />} />
        <Route path="/rooms" element={<Beds_Rooms />} />
        <Route path="/admin" element={<Add_Admin />} />
        <Route path="/addbeds" element={<AddBeds />} />


        {/* Doctor Part */}
        <Route path="/reports" element= {<AllReport />} />
        <Route path="/checkappointment" element={<Check_Appointment />} />
        <Route path="/createslip" element={<Discharge_and_Create_Slip />} />
        <Route path="/patientdetails" element={<Patient_Details />} />
        <Route path="/doctorprofile" element={<Doctor_Profile />} />

        {/* Nurse Part */}

        <Route path="/addpatient" element={<Add_Patient />} />
        <Route path="/bookappointment" element={<Book_Appointment />} />
        <Route path="/nurseprofile" element={<Nurse_Profile />} />
      </Routes>
     </Router>
    </>
  );
}

export default App