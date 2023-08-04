import React from 'react';
import "../All.css"

function Slider1() {
  return (
    <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
        {/* Add more indicators if needed */}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <div className="sp-testimonial-free"><div className="sp-testimonial-client-image img-slider"><img decoding="async" width="120" height="120" src="https://agnitotechnologies.com/wp-content/uploads/2020/06/chase-slepak-120x120.jpg" className="tfree-client-image wp-post-image" alt="chase slepak" loading="lazy"/></div><div className="sp-testimonial-title "><h3 className="sp-testimonial-post-title head1">Chase Slepak</h3></div><div className="sp-testimonial-client-testimonial"><div className="sp-testimonial-content"><p className= "head1">I started the first project with Agntio in 2014 and <br/> worked with them on 3 more.<br/> I was very happy with the Project Management process and<br/> with the timely updates given by the team.<br/> He grew his business along with Agnito and gave many new projects to us.</p></div></div><h4 className="sp-testimonial-client-name head1">Chase Slepak</h4><div class="sp-testimonial-client-rating"><i class="fa fa-star" aria-hidden="true"></i><i className="fa fa-star head1" aria-hidden="true"></i><i className="fa fa-star head1" aria-hidden="true"></i><i className="fa fa-star head1" aria-hidden="true"></i><i classname="fa fa-star head1" aria-hidden="true"></i></div> <div className="sp-testimonial-client-designation head1">Head</div></div>
        </div>
        <div className="carousel-item">
        <div className="sp-testimonial-free"><div className="sp-testimonial-client-image img-slider"><img decoding="async" width="120" height="120" src="https://agnitotechnologies.com/wp-content/uploads/2020/06/chase-slepak-120x120.jpg" className="tfree-client-image wp-post-image" alt="chase slepak" loading="lazy"/></div><div className="sp-testimonial-title "><h3 className="sp-testimonial-post-title head1">Chase Slepak</h3></div><div className="sp-testimonial-client-testimonial"><div className="sp-testimonial-content"><p className= "head1">I started the first project with Agntio in 2014 and <br/> worked with them on 3 more.<br/> I was very happy with the Project Management process and<br/> with the timely updates given by the team.<br/> He grew his business along with Agnito and gave many new projects to us.</p></div></div><h4 className="sp-testimonial-client-name head1">Chase Slepak</h4><div class="sp-testimonial-client-rating"><i class="fa fa-star" aria-hidden="true"></i><i className="fa fa-star head1" aria-hidden="true"></i><i className="fa fa-star head1" aria-hidden="true"></i><i className="fa fa-star head1" aria-hidden="true"></i><i classname="fa fa-star head1" aria-hidden="true"></i></div> <div className="sp-testimonial-client-designation head1">Head</div></div>

        </div>
        <div className="carousel-item">
        <div className="sp-testimonial-free"><div className="sp-testimonial-client-image img-slider"><img decoding="async" width="120" height="120" src="https://agnitotechnologies.com/wp-content/uploads/2020/06/chase-slepak-120x120.jpg" className="tfree-client-image wp-post-image" alt="chase slepak" loading="lazy"/></div><div className="sp-testimonial-title "><h3 className="sp-testimonial-post-title head1">Chase Slepak</h3></div><div className="sp-testimonial-client-testimonial"><div className="sp-testimonial-content"><p className= "head1">I started the first project with Agntio in 2014 and <br/> worked with them on 3 more.<br/> I was very happy with the Project Management process and<br/> with the timely updates given by the team.<br/> He grew his business along with Agnito and gave many new projects to us.</p></div></div><h4 className="sp-testimonial-client-name head1">Chase Slepak</h4><div class="sp-testimonial-client-rating"><i class="fa fa-star" aria-hidden="true"></i><i className="fa fa-star head1" aria-hidden="true"></i><i className="fa fa-star head1" aria-hidden="true"></i><i className="fa fa-star head1" aria-hidden="true"></i><i classname="fa fa-star head1" aria-hidden="true"></i></div> <div className="sp-testimonial-client-designation head1">Head</div></div>

        </div>
        {/* Add more carousel items if needed */}
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
  );
}

export default Slider1;