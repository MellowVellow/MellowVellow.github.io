import React from "react";
import "./Info.css";
import { globeIcon, checkmarkIcon, bgElement2 } from "../../assets";

const Info = () => {
  return (
    <section id="info" className="grayblack">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={globeIcon} />
            <div className="amount">International</div>
            <div className="type">Shipping</div>
          </div>

          <div className="info-content">
            <img src={checkmarkIcon} />
            <div className="amount">Quality</div>
            <div className="type">NBA Approved</div>
          </div>
        </div>

        <img className="bg-element-2" src={bgElement2} alt="" />
      </div>
    </section>
  );
};

export default Info;
