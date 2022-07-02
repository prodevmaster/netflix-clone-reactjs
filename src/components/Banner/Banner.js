import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../api/index";
import requests from "../../api/requests";
const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(requests.fetchNetflixOriginals);
      const dataResults = await data.results;
      const randomMovie = Math.floor(Math.random() * dataResults.length);
      setMovie(dataResults[randomMovie]);
    };
    fetchData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.original_title}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
