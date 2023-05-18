import React from "react";
import Banner from "../Components/Banner";
import Photos from "../Components/Photos";
import SocialBelt from "../Components/ScialBelt";
import MeetPooja from "../Components/MeetPooja";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BottomFooter from "../Components/BottomFooter";
import FloatButton from "../Components/SubComponents/FloatButton";
import MakeUpShowCase from "../Components/MakeUpShowCase";

const Home = () => {
  return (
    <div>
    <FloatButton />
    <Navbar />
      <Banner />
      <Photos />
      <MakeUpShowCase />
      <MeetPooja />
      <SocialBelt />
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default Home;
