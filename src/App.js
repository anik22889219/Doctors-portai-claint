
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navber from './Navber/Navber';
import Appoinment from './Appoinment/Appoinment';
import Login from './Login/Login';
import Singup from './Login/Singup';
import Privetrouts from './Login/Privetrouts';
import About from './About/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard/Dashboard';
import MyAppointments from './Dashboard/MyAppointments';
import MyReaviews from './Dashboard/MyReaviews';
import AllUsers from './AdminPanel/AllUsers';
import RequireAdmin from './Login/RequireAdmin';
import AddDoctor from './AdminPanel/AddDoctor';
import ContactUs from './Home/ContactUs';
import ManageDoctors from './AdminPanel/ManageDoctors';
import AdminDashboard from './AdminPanel/AdminDashboard';
import AllBookings from './AdminPanel/AllBookings';
import ConfirmBookings from './AdminPanel/ConfirmBookings';
import AddService from './AdminPanel/AddService';
import ManageService from './AdminPanel/ManageService';

function App() {
  return (
    <div className="mx-auto">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="singup" element={<Singup />} />
        <Route path="appointment" element={
          <Privetrouts><Appoinment></Appoinment></Privetrouts>
        } />
        <Route path="admin" element={
          <Privetrouts><AdminDashboard></AdminDashboard></Privetrouts>
        } >
          <Route index element={<RequireAdmin><AllBookings /></RequireAdmin>} />
          <Route path="confirmbokings" element={<RequireAdmin><ConfirmBookings /></RequireAdmin>} />
          <Route path="users" element={<RequireAdmin><AllUsers /></RequireAdmin>} />
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor /></RequireAdmin>} />
          <Route path="addService" element={<RequireAdmin><AddService /></RequireAdmin>} />
          <Route path="manageService" element={<RequireAdmin><ManageService /></RequireAdmin>} />
          <Route path="manageDoctors" element={<RequireAdmin><ManageDoctors /></RequireAdmin>} />

        </Route>
          
        <Route path='dashboard' element={
          <Privetrouts><Dashboard></Dashboard></Privetrouts>
        } >
          <Route index element={<MyAppointments />} />
          <Route path="reaviews" element={<MyReaviews />} />
          

        </Route>
        <Route path="about" element={<About></About>} />
        <Route path="contactus" element={<ContactUs></ContactUs>} />

      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
