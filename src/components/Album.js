import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Album.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Album() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  const [music, setMusic] = useState([]);
  useEffect(() => {
    const Album = async () => {
      axios
        .get("https://academics.newtonschool.co/api/v1/music/album")
        .then((response) => {
          let data = response.data.data;
          console.log(data);
          setMusic(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    Album();
  }, []);

  return (
    <div className="Album">
    <Slider {...settings}>
    {music.map((song, index) => {
          return (
            <div className="music" key={index}>
            <div className="image-conatiner">
              <img src={song.image} alt={song.title} />
              <div class="button"> <span className="play-button">&#9654;</span></div>
              </div>
              <h4>{song.title}</h4>
            </div>
          );
        })}
        </Slider>
        </div>
  );
}

export default Album;
