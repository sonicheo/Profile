import React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import Home from '../components/Dashboard/Home';
import AboutMe from '../components/Dashboard/AboutMe';
import Carousel from '../components/Dashboard/Carousel'
import Contact from '../components/Dashboard/Contact'


const Dashboard = (props) => {
  return (
    <>
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Carousel/>
        <Contact/>
    </>
  );
};

export default Dashboard;
