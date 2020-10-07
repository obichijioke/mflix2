import React, { useContext, useEffect } from "react";
import VideoPlayer from "../layouts/VideoPlayer";
import MovieContext from "../../context/movie/movieContext";
import TvSeriesTabs from "../layouts/TvSeriesTabs.js";
import SliderContainer from "../layouts/SliderContainer";
import Preview from "../layouts/Preview";

const TvDetails = (props) => {
  const movieContext = useContext(MovieContext);
  const {
    title,
    genres,
    poster_path,
    vote_average,
    release_date,
    original_name,
    first_air_date,
    overview,
    backdrop_path,
    name,
    number_of_seasons,
  } = movieContext.movieDetails;

  useEffect(() => {
    movieContext.clearEpisodeList();
    movieContext.getMovieDetails(props.match.params.name, "tv");
    movieContext.setCasts(props.match.params.name);
    setTimeout(function () {
      movieContext.setShowPreview();
    }, 5000);
  }, [props.match.params.name]);

  return (
    <div className="w-full">
      <Preview
        videoUrl={movieContext.preview}
        title={name}
        backDrop={backdrop_path}
        overview={overview}
        genres={genres}
        poster={poster_path}
        rate={vote_average}
        date={release_date}
        seasons={number_of_seasons}
      />
      <TvSeriesTabs movieId={props.match.params.name} />
      <div className="container">
        <SliderContainer
          movies={movieContext.relateditems}
          title={"Similar to " + name}
        />
      </div>
    </div>
  );
};

export default TvDetails;
