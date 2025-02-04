import React from 'react'
import "./Testimonials.css"

const Testimonials = () => {
  return (
    <section id="testimonials" className="grayblack">
      <div className="wrapper">
        <h2>What our Customers say?</h2>

        <div className="content-container">
            <div className="testimonial">
              {/* <img src={urlFor()} alt="" /> */}
              <div className="reviewer-details">
                <div className="name"></div>
                <div className="company-name"></div>
                <div className="review"></div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials