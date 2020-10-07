import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MoviesList from "../layouts/MoviesList";

const Movies = () => {
  return (
    <div className="movie-list">
      <MoviesList movieType={"movie"} />
    </div>
  );
};

export default Movies;
