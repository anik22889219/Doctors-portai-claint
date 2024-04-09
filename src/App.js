
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navber from './Navber/Navber';
import Appoinment from './Appoinment/Appoinment';

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={<Appoinment></Appoinment>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
