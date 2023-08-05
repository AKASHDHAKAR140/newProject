import React from 'react';
import "../All.css";

function Slide2() {
  return (
    <div>
      {/* First Slider */}
      <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="carousel">
        {/* ... First slider content ... */}
      </div>

      {/* Second Slider */}
      <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {/* Second slider indicators */}
          <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
          {/* Add more buttons for additional slides as needed */}
        </div>
        <div className="carousel-inner">
          {/* Second slider items */}
          <div className="carousel-item active">
            <img src="//example.com/path/to/image1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption slider-inner">
              <h1 style={{ color: '#e6a80e' }}>SECOND SLIDER - SLIDE 1</h1>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="//example.com/path/to/image2.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption slider-inner">
              <h1 style={{ color: '#e6a80e' }}>SECOND SLIDER - SLIDE 2</h1>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="//example.com/path/to/image3.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption slider-inner">
              <h1 style={{ color: '#e6a80e' }}>SECOND SLIDER - SLIDE 3</h1>
              <p>Some representative placeholder content for the fourth slide.</p>
            </div>
          </div>
          {/* Add more carousel items for additional slides as needed */}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slide2;