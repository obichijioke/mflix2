import React, { useEffect, useContext } from "react";
import Featured from "./components/layouts/Featured";
import Trending from "./components/layouts/Trending";
import MovieContext from "./context/movie/movieContext";
import SliderContainer from "./components/layouts/SliderContainer";

function Home() {
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    movieContext.setTrending();
    movieContext.setMovies();
    movieContext.setTvshows();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Featured />

      <Trending />
      <SliderContainer movies={movieContext.tvShows} title={"TV Series"} />
      <SliderContainer movies={movieContext.movies} title={"Movies"} />
    </div>
  );
}

export default Home;
