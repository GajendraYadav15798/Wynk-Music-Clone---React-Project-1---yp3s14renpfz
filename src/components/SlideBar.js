import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/SlideBar.css";

function SlideBar() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="text">1</div>
        <div className="text">2</div>
        <div className="text">3</div>
        <div className="text">4</div>
        <div className="text">5</div>
      </div>
    </Slider>
  );
}

export default SlideBar;
