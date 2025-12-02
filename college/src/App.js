import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Courses from "./Components/Courses";
import Admission from "./Components/Admission";
import Science from "./Components/Science";
import Commerce from "./Components/Commerce";
import Arts from "./Components/Arts";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
         <Route path="/science" element={<Science />} />
        <Route path="/commerce" element={<Commerce />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
