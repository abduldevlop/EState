import { SearchBar } from "../searchbar/SearchBar";
import "./Hero.scss";

import React from "react";

const Hero = () => {
  return (
    <div className="header">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus nisi
            eaque delectus nemo maxime vero voluptatibus pariatur officiis
            numquam eius? eaque delectus nemo maxime vero voluptatibus pariatur
            officiis numquam eius?
          </p>
          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gainned</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src="/bg.png" alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
