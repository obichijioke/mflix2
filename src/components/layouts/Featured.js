import React, { useContext, useEffect } from "react";
import Spinner from "../Spinner";
import Preview from "./Preview";
import MovieContext from "../../context/movie/movieContext";

export default function Featured() {
  const movieContext = useContext(MovieContext);
  useEffect(() => {
    setTimeout(function () {
      movieContext.setShowPreview();
    }, 15000);
  }, []);

  const {
    title,
    genres,
    poster_path,
    vote_average,
    release_date,
    overview,
    backdrop_path,
    runtime,
  } = movieContext.featured;

  if (movieContext.featured.title === undefined) {
    return <Spinner />;
  } else {
    return (
      <Preview
        videoUrl={movieContext.featuredVideo}
        backDrop={backdrop_path}
        overview={overview}
        genres={genres}
        title={title}
        poster={poster_path}
        rate={vote_average}
        date={release_date}
        runtime={runtime}
      />
    );
  }
}
