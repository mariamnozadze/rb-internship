import React from "react";
import "../App.css";

const PersonalInfo = () => {
  return (
    <div className="main_content">
      <div className="left_panel">
        <h2>Hey, Rocketeer, what <br></br> are your coordinates?</h2>
        <div className="input_fields">
          <input
            className="first_name"
            placeholder="First Name"
            required
          ></input>
          <input className="Last_name" placeholder="Last Name" required></input>
          <input className="email" placeholder="E mail" required></input>
          <input
            className="mobile_num"
            placeholder="+995 5__ __ __ __"
            required
          ></input>
        </div>
      </div>
      <div className="right_panel">
      <h2>Redberry Origins</h2>
      <h3 className="description">You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇</h3>
      </div>
    </div>
  );
};

export default PersonalInfo;
