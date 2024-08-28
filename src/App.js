
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navber from './Navber/Navber';
import Appoinment from './Appoinment/Appoinment';
import Login from './Login/Login';
import Singup from './Login/Singup';
import Privetrouts from './Login/Privetrouts';
import About from './About/About';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard/Dashboard';
import MyAppointments from './Dashboard/MyAppointments';
import MyReaviews from './Dashboard/MyReaviews';
import AllUsers from './Dashboard/AllUsers';
import RequireAdmin from './Login/RequireAdmin';
import AddDoctor from './Dashboard/AddDoctor';
import ContactUs from './Home/ContactUs';
import ManageDoctors from './Dashboard/ManageDoctors';

function App() {
  return (
    <div className="mx-auto">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="singup" element={<Singup/>} />
        <Route path="appointment" element={
          <Privetrouts><Appoinment></Appoinment></Privetrouts>
        } />
        <Route path='dashboard' element={
          <Privetrouts><Dashboard></Dashboard></Privetrouts>
        } >
          <Route index element={<MyAppointments />} />
          <Route path="reaviews" element={<MyReaviews />} />
          <Route path="users" element={<RequireAdmin><AllUsers/></RequireAdmin>} />
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor/></RequireAdmin>} />
          <Route path="manageDoctors" element={<RequireAdmin><ManageDoctors/></RequireAdmin>} />

        </Route>
        <Route path="about" element={<About></About>} />
        <Route path="contactus" element={<ContactUs></ContactUs>} />
       
      </Routes>
      
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
