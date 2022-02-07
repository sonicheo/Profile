import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Home from '../components/Dashboard/Home';
import AboutMe from '../components/Dashboard/AboutMe';
import Contact from '../components/Dashboard/Contact'
import Portfolio from '../components/Dashboard/Portfolio';


const Dashboard = (props) => {
  return (
    <>
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Portfolio/>
        <Contact/>
    </>
  );
};

export default Dashboard;
