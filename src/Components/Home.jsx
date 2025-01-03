//import React from 'react'

import Banner from "./Banner";
import Footer from "./Footer";
import Freebook from "./Freebook";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
      </div>
    </>
  );
};

export default Home;
