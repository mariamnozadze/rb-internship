import React from "react";
import "../App.css";

const TechnicalSkills = () => {
  return (
    <div className="main_content">
      <div className="left_panel">
        <h2>Tell us about your skills</h2>
        <div className="input_fields">
          <div className="experience_form">
          <input
          className="skills"
          placeholder="skills"
          required
        ></input>
            <input
              type="number"
              id="experience_years"
              name="experience_years"
              placeholder="Experience Duration in Years"
              min="0"
              max="20"
            ></input>
          </div>
        </div>
        <button type="submit" className="add_language_button">
    Add Programming Language
        </button>
      </div>
      <div className="right_panel">
        <h2>A bit about our battles</h2>
        <h3 className="description">
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </h3>
      </div>
    </div>
  );
};

export default TechnicalSkills;
