import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieContext from "../../context/movie/movieContext";
import MoviesList from "../layouts/MoviesList";

const Movies = () => {
  const movieContext = useContext(MovieContext);

  return (
    <div className="movie-list">
      <MoviesList movieType={"movie"} />
    </div>
  );
};

export default Movies;
