import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Features from "../Components/FeaturesCard/Features_Card";
import Timeline from "../Components/Timeline/Timeline";
import Footer from "../Components/Footer/Footer";
import Cards2 from "../Components/card2/Cards2";
import Carousel from "../Components/Carousel/Carousel";
// import Newletter from "../Components/Newsletter";
import UserCard from "../Components/UserCard/UserCard";
// import Signup from "../Components/Signup/Signup";
import FootButton from "../Components/FootButton/Footbutton";
import TitleCard from "../Components/TitleCard/Titlecard";
import Info from "../Components/Info/Info";
// import Terms from "../Components/Signup/SignTerms";
const Home = () => {
  return (
    <>
      {/* <div>Home</div> */}
      {/* <Carousel/> */}
      <Navbar />
      <Carousel />
      <TitleCard
        title={"Welcome to the World of Mordern Finance!!!"}
        desc={
          "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents."
        }
        route={"/"}
        end={"continue reading"}
      />
      <TitleCard
        title={"Welcome to the World of Mordern Finanfihwsiofusifvuwce!!!"}
        desc={
          "Multiple lines of text that form the fiwohfsifhlede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents."
        }
        route={"/"}
        end={"continue reafsuhfding"}
      />
      <Features />
      <Timeline />
      <UserCard />
      {/* <UserCard/><UserCard/><UserCard/> */}
      <Cards2 />
      <FootButton />
      <Info />
      <Footer />
      {/* <Newletter/> */}
      {/* <Signup/> */}
      {/* <Terms/> */}
    </>
  );
};

export default Home;
