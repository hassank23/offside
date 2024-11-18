import React from "react";
import FirstCarousel from "../../Components/FirstCarousel/FirstCarousel";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="home-page ">
     
        <div className="big-item ">
          <FirstCarousel />
        </div>
        <div className="small-item ">
          <span className="small-item-child">
            <img src={require("./1.png")} />
          </span>
          <span className="small-item-child">
            <img src={require("./1.png")} />
          </span>
          <span className="small-item-child">
            <img src={require("./1.png")} />
          </span>
          <span className="small-item-child">
            <img src={require("./1.png")} />
          </span>
        </div>
      </div>
   
  );
};

export default HomePage;
