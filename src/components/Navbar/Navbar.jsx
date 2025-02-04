import React from 'react'
import "./Navbar.css"
import { beballinLogo } from '../../assets'

const Navbar = () => {
  return <nav>
    <a href="#" className="logo" alt="logo">
      <img src={beballinLogo} />
    </a>

    <ul> 
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">All Products</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Testimonials</a>
      </li>
    </ul>
  </nav>
}

export default Navbar