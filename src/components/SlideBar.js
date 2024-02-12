import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Styles/SlideBar.css";


function SlideBar() {
  const settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Slider {...settings}>
   
    <div className="banner_img_container">
      <img
        src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65c2727644baca695407994b/BANNER_25726652894040.png"
        alt="logo"
      />
    </div>
    <div className="banner_img_container">
    <img
      src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65b7c8151f394e79aef9161f/BANNER_9198759196543.jpg"
      alt="logo"
    />
  </div>
  <div className="banner_img_container">
  <img
    src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65b750029b42eb4240a49ea4/BANNER_438588856355036.jpg"
    alt="logo"
  />
</div>
<div className="banner_img_container">
<img
  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65a6b1e75596d027ec4e272f/BANNER_17778173601338.jpg"
  alt="logo"
/>
</div>
<div className="banner_img_container">
<img
  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65c5c18a785de36eb21688c3/BANNER_6464837523040.jpg"
  alt="logo"
/>
</div>
<div className="banner_img_container">
<img
  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65c368b2cb89bf1d880582e7/BANNER_1411117245597414.jpg"
  alt="logo"
/>
</div>
<div className="banner_img_container">
<img
  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65c092a33c6a4c48378c6020/BANNER_359706260551755.png"
  alt="logo"
/>
</div>
<div className="banner_img_container">
<img
  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65aa4bd36f72150e10bac339/BANNER_75810137004499.jpg"
  alt="logo"
/>
</div>
<div className="banner_img_container">
<img
  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65c623c60a0f600af203f088/BANNER_860105696242472.jpg"
  alt="logo"
/>
</div>
<div className="banner_img_container">
<img
  src="https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65bce2787953cf73d183a00e/BANNER_32971893469605.jpg"
  alt="logo"
/>
</div>

    
    </Slider>
  );
}

export default SlideBar;
