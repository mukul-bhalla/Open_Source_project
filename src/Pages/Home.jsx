import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Features from "../Components/FeaturesCard/Features_Card";
import Timeline from "../Components/Timeline/Timeline";
import Footer from "../Components/Footer/Footer";
import Cards2 from "../Components/card2/Cards2";
import  Carousel  from "../Components/Carousel/Carousel";
// import Newletter from "../Components/Newsletter";
import UserCard from "../Components/UserCard/UserCard";
import Signup from "../Components/Signup/Signup";
import FootButton from "../Components/FootButton/Footbutton";
import TitleCard from "../Components/TitleCard/Titlecard";
import Terms from "../Components/Signup/SignTerms";
const Home = () => {
  return (
    <>
    {/* <div>Home</div> */}
    <Navbar />
    <Carousel/>
    <TitleCard/>
    <Features/>
    <Timeline/>
    <UserCard/>
    {/* <UserCard/><UserCard/><UserCard/> */}
    <Cards2/>
    <FootButton/>
    <Footer/>
    {/* <Newletter/> */}
    <Signup/>
    <Terms/>
    
    </>
  )
}

export default Home