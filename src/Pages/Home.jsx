import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Features from "../Components/FeaturesCard/Features_Card";
import Timeline from "../Components/Timeline/Timeline";
import Footer from "../Components/Footer/Footer";
import Cards2 from "../Components/card2/Cards2";
import  Carousel  from "../Components/Carousel/Carousel";
// import Newletter from "../Components/Newsletter";
const Home = () => {
  return (
    <>
    {/* <div>Home</div> */}
    <Navbar />
    <Carousel/>
    <Features/>
    <Timeline/>
    <Cards2/>
    <Footer/>
    {/* <Newletter/> */}
    
    </>
  )
}

export default Home