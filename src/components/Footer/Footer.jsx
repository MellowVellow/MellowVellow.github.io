import React from "react";
import "./Footer.css";
import { beballinLogo,instagramLogo, twitterLogo, facebookLogo } from "../../assets";

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              <img src={beballinLogo} alt="logo" />
            </a>

            <div className="social-icons">
              <a href="#">
                <img src={facebookLogo} alt="" />
              </a>

              <a href="#">
                <img src={twitterLogo} alt="" />
              </a>

              <a href="#">
                <img src={instagramLogo} alt="" />
              </a>
            </div>

            <div className="copyright">
              AlbertMarvelJong XD Ⓒ 2023
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">All Products</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">contact@email.com</a>
              </li>

              <li>
                <a href="#">+1 999 9999 999</a>
              </li>
            </ul>
          </div>

          <div className="copyright mobile">
            Albert Marvel Jong XDⒸ 2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
