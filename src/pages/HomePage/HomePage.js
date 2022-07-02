import React, { useState } from "react";
import axios from "../../api/index";
import requests from "../../api/requests";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
import "./HomePage.css";

const API_KEY = "TMDB_API_KEY";

const initialState = {
  rowId: null,
  movieTrailer: null,
  movieId: null,
};

const Home = () => {
  const [currentMovie, setCurrentMovie] = useState(initialState);

  const movieClick = async (rowId, movieId) => {
    if (movieId === currentMovie.movieId) {
      setCurrentMovie(initialState);
    } else {
      const { data } = await axios.get(
        `/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      const dataRes = await data.results;
      const movieTrailers = [];
      for (const trailer of dataRes) {
        movieTrailers.push(trailer.key);
      }
      const randomTrailer =
        movieTrailers[Math.floor(Math.random() * movieTrailers.length)];
      setCurrentMovie({
        rowId,
        movieId,
        movieTrailer: randomTrailer,
      });
    }
  };

  return (
    <div>
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        movie={currentMovie}
        id={0}
        movieClick={movieClick}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        movie={currentMovie}
        id={1}
        movieClick={movieClick}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        movie={currentMovie}
        id={2}
        movieClick={movieClick}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        movie={currentMovie}
        id={3}
        movieClick={movieClick}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        movie={currentMovie}
        id={4}
        movieClick={movieClick}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        movie={currentMovie}
        id={5}
        movieClick={movieClick}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        movie={currentMovie}
        id={6}
        movieClick={movieClick}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        movie={currentMovie}
        id={7}
        movieClick={movieClick}
      />
    </div>
  );
};

export default Home;
