import React from "react";
import "../App.css"

const AboutYou = () => {
  return (
    <div className="main_content">
      <div className="left_panel">
        <h2>What About You?</h2>
      </div>
      <div className="right_panel">
        <h2>Redberrian Insights</h2>
        <h3 className="description">
          We were soo much fun before the pandemic started! Parties almost every
          weekend and lavish employee birthday celebrations! Unfortunately,
          covid ruined that fun like it did almost everything else in the world.
          But we try our best to zhuzh it up a bit. For example, we host
          biweekly Devtalks where our senior and lead developers talk about
          topics they are passionate about. Previous topics have included Web3,
          NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but
          you can join our Zoom broadcast as well. Feel free to join either as
          an attendee or a speaker!
        </h3>
      </div>
    </div>
  );
};

export default AboutYou;
