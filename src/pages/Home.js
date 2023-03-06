import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo.js";
import Countries from "../components/Countries.js";

const Home = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Countries />
    </div>
  );
};

export default Home;
