import React from 'react'
import Hbg1 from '../Images/h-bg1.jpg'
import Hbg2 from '../Images/h-bg2.jpg'
import Hbg3 from '../Images/h-bg3.jpg'
import "./Carousel.css";

function HeroCarousel() {

    const imgStyle = {
        width : "100%",
        height : "90vh"
    }

  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <div className="carousel-inner">
        <div className="carousel-item active" id='hbg1'>
          <div className="carousel-caption">
    <h3>Los Angeles</h3>
    <p>We had such a great time in LA!</p>
  </div>
        </div>
        <div className="carousel-item" id='hbg2'>
          <div className="carousel-caption">
    <h3>Los Angeles</h3>
    <p>We had such a great time in LA!</p>
  </div>
        </div>
        <div className="carousel-item" id='hbg3'>
          <div className="carousel-caption">
    <h3>Los Angeles</h3>
    <p>We had such a great time in LA!</p>
  </div>
        </div>
      </div>

      <a className="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
}

export default HeroCarousel;
