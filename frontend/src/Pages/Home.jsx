import React from 'react'
import Navbar from "../Components/Navbar"
import Features from "../Components/Features_Card";
import Timeline from "../Components/Timeline";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
    {/* <div>Home</div> */}
    <Navbar />
    <Features/>
    <Timeline/>
    <Footer/>
    </>
  )
}

export default Home