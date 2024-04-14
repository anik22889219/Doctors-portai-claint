
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navber from './Navber/Navber';
import Appoinment from './Appoinment/Appoinment';
import Login from './Login/Login';
import Singup from './Login/Singup';
import Privetrouts from './Login/Privetrouts';
import About from './About/About';

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="singup" element={<Singup/>} />
        <Route path="appointment" element={
          <Privetrouts><Appoinment></Appoinment></Privetrouts>
        } />
        <Route path="about" element={
          <Privetrouts>
            <About></About>
          </Privetrouts>
        } />
       
      </Routes>
      
      
    </div>
  );
}

export default App;
