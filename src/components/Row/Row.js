import React, { useState, useEffect } from "react";
import axios from "../../api/index";
import YouTube from "react-youtube";
import "./Row.css";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({
  title,
  fetchUrl,
  movie,
  id,
  movieClick,
  isLargeRow = false,
}) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(fetchUrl);
      const dataResults = await data.results;
      setMovies(dataResults);
    };
    fetchData();
  }, [fetchUrl]);
  const videoReady = (event) => {
    event.target.playVideo();
  };
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  key={movie.id}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  onClick={() => {
                    movieClick(id, movie.id);
                  }}
                />
              )
          )}
        </div>
      </div>
      {movie.rowId === id && (
        <YouTube
          videoId={movie.movieTrailer}
          opts={opts}
          onReady={videoReady}
        />
      )}
    </>
  );
};

export default Row;
