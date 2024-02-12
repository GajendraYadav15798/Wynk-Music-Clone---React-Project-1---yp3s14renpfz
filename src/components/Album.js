import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Album.css";
function Album() {
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
    <div>
      <div className="Album-container">
        {music.map((song, index) => {
          return (
            <div className="music" key={index}>
              <img src={song.image} alt={song.title} />
              <h4>{song.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Album;
