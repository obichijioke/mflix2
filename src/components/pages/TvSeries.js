import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieContext from "../../context/movie/movieContext";
import MoviesList from "../layouts/MoviesList";

const TvSeries = () => {
  const movieContext = useContext(MovieContext);

  return (
    <div className="movie-list">
      <MoviesList movieType={"tv"} />
    </div>
  );
};

export default TvSeries;
