import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieContext from "../../context/movie/movieContext";
import SliderContainer from "./SliderContainer";

const Trending = () => {
  const movieContext = useContext(MovieContext);

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="sm:w-full md:w-1/4 px-6 pt-10 flex flex-col justify-center">
        <h3 className="text-xl font-extrabold mb-3">
          Popular Movies and Series to Watch Now
        </h3>
        <p>Most watched Movies and TV Shows</p>
      </div>
      <div className="sm:w-full md:w-3/4">
        <SliderContainer
          movies={movieContext.trending && movieContext.trending}
        />
      </div>
    </div>
  );
};

export default Trending;
