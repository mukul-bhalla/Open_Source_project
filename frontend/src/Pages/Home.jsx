import React from 'react'
import Navbar from "../Components/Navbar"
import Features from "../Components/Features_Card";
import Timeline from "../Components/Timeline";
import Footer from "../Components/Footer";
import Cards2 from "../Components/Cards2";
// import Newletter from "../Components/Newsletter";
const Home = () => {
  return (
    <>
    {/* <div>Home</div> */}
    <Navbar />
    <Features/>
    <Timeline/>
    <Footer/>
    {/* <Newletter/> */}
    <Cards2/>
    </>
  )
}

export default Home