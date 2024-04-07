
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navber from './Navber/Navber';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={""} />
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
