import React from 'react'
import "./Header.css"
import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
  <header>
    <div className="wrapper">
      <Navbar />
      <div className="cta">
        <p className="Store-products">Basketball Assortments</p>
        <h1>Providing Balls For Everyone</h1>
        <a href="#" className="demo-btn">
          Learn More
        </a>
      </div>
    </div>
  </header>
  )

}

export default Header