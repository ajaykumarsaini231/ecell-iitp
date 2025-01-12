import './All.css';
import Coming from './Comings00n';
import Header from './header';
import Team from './Team';
import Time from "./Time";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary routing components
import Footer from './AdminFooter';
import { useState } from 'react';

function Final() {
       
  return (
    <>
      <Header />
      {/* middle funncio */}
      {/* <Time/> */}
      {/* Wrap the routing components inside the Router */}
      <Router>
        <Routes>
          {/* Define the routes for your pages */}
          <Route path="/home" element={<Team/>} /> {/* Replace with the Time component if needed */}
          <Route path="/coming-soon" element={<Coming />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default Final;
