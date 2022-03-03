import React from "react";
import "./Welcome.css";
import rocketman from "../images/rocketman.png";

const Welcome = () => {
  return (
    <div className="welcome_page">
      <div className="welcome_content">
        <h1>Welcome Rocketeer !</h1>
        <p className="start-questionnaire">Start Questionnaire</p>
        <p className="submitted">Submitted Applications</p>
        <div className="welcome_img">
          <img src={rocketman} alt="rocketman" className="rocketman" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
