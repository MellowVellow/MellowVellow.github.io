import React, { useState } from "react";
import "./Topics.css"
import { bgElement1, shoe1, shoe2, shoe3, shoe4, shoe5, shoe6} from "../../assets"

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(shoe1);
  return (
    <section id='topics' className='semiblack'>
      <div className="wrapper">
        <h2>Our Products</h2>
        <div className="content-container">
          <ul className="topics-list">
              <li onMouseEnter={() => setCurrentImage(shoe1)}>Product1</li>
              <li onMouseEnter={() => setCurrentImage(shoe2)}>Product2</li>
              <li onMouseEnter={() => setCurrentImage(shoe3)}>Product3</li>
              <li onMouseEnter={() => setCurrentImage(shoe4)}>Product4</li>
              <li onMouseEnter={() => setCurrentImage(shoe5)}>Product5</li>
              <li onMouseEnter={() => setCurrentImage(shoe6)}>Product6</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage}></img>
          </div>
          <img src={bgElement1} className="bg-element1"></img>
        </div>
      </div>
    </section>

  )
}

export default Topics

