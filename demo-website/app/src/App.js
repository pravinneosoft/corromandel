import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';
import Navbar from './Navbar';

const App = () => {

  return (
    <div>  
      <main>
        <Navbar/>
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/servicess" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
     
   </Routes>
    </main></div>
  );
};
export default App;

