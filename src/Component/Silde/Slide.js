import React from 'react'
import "../All.css"
function Slide() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="//agnitotechnologies.com//wp-content/uploads/2022/11/cryptonew.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption slider-inner">
        <h1 style ={{color:'#e6a80e'}}>ON-DEMAND,SECURE & RISK-FREE <br/>BLOCKCHAIN DEVELOPMENT</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="//agnitotechnologies.com//wp-content/uploads/2022/11/heath.jpg" className="d-block w-100" alt="..."/>
     
      
    </div>
    
    <div className="carousel-item">
      <img src="//agnitotechnologies.com//wp-content/uploads/2022/11/ecommerce-img.jpg" className="d-block w-100" alt="..."/>
     
    </div>

    <div className="carousel-item">
      <img src="//agnitotechnologies.com//wp-content/uploads/2022/11/igaming.jpg" className="d-block w-100" alt="..."/>
      
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slide