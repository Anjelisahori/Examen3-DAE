import React from "react";
import Slider from "react-slick";  
import "./OfferCarousel.css";  

const settings = {
  dots: true,  
  arrows: true,  
  infinite: true,  
  speed: 500,  
  slidesToShow: 1,  
  slidesToScroll: 1,  
  nextArrow: <button className="custom-next">Next</button>,  
  prevArrow: <button className="custom-prev">Previous</button>,  
};

export default function OfferCarousel() {
  return (
    <div className="offer-carousel">
      <Slider {...settings}>
        <div>
          <img src="/img/offert1.jpg" alt="Oferta 1" />
        </div>
        <div>
          <img src="/img/offert2.jpg" alt="Oferta 2" />
        </div>
        <div>
          <img src="/img/offert3.jpg" alt="Oferta 3" />
        </div>
      </Slider>
    </div>
  );
}
