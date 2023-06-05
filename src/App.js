import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import SkinProducts from './components/SkinProducts';
import HairProducts from './components/HairProducts';
import MostSold from './components/MostSold';
import MainPage from './components/MainPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/main" element={ <MainPage /> } />
          <Route path="/about-us" element={ <AboutUs /> } />
          <Route path="/contact-us" element={ <ContactUs /> } />
          <Route path="/skin-treatment" element={ <SkinProducts /> } />
          <Route path="/hair-treatment" element={ <HairProducts /> } />
          <Route path="/most-sold" element={ <MostSold /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
