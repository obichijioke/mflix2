import React, { useContext } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieContext from "../../context/movie/movieContext";
import Spinner from "../Spinner";
import CastItem from "./CastItem";

const Casts = () => {
  const movieContext = useContext(MovieContext);

  if (movieContext.casts.cast === []) {
    return <Spinner />;
  } else {
    return (
      <div className="w-full">
        <div className="relative">
          <h5 className="my-4 font-medium text-lg">Cast</h5>
          <div className="flex flex-wrap overflow-y-auto h-64 scrollbarHide">
            {movieContext.casts.cast &&
              movieContext.casts.cast.map((item, i) => (
                <div className="w-1/2 md:w-1/3 lg:w-1/5 p-1" key={i}>
                  <CastItem item={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Casts;
