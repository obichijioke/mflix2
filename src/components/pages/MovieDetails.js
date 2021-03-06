import React, { useContext, useEffect } from "react";

import MovieContext from "../../context/movie/movieContext";

import SliderContainer from "../layouts/SliderContainer";
import Preview from "../layouts/Preview";

const MovieDetails = (props) => {
  const movieContext = useContext(MovieContext);
  const {
    title,
    genres,
    poster_path,
    vote_average,
    release_date,
    original_name,
    overview,
    backdrop_path,
    runtime,
  } = movieContext.movieDetails;

  useEffect(() => {
    movieContext.getMovieDetails(props.match.params.name, "movie");
    setTimeout(function () {
      movieContext.setShowPreview();
    }, 6000);
    //eslint-disable-next-line
  }, [props.match.params.name]);

  return (
    <div className="details-page">
      <Preview
        videoUrl={movieContext.preview}
        title={title}
        backDrop={backdrop_path}
        overview={overview}
        genres={genres}
        poster={poster_path}
        rate={vote_average}
        date={release_date}
        runtime={runtime}
      />

      <div style={{ width: "100%" }}>
        <SliderContainer
          movies={movieContext.relateditems}
          title={"Similar to " + title || original_name}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
