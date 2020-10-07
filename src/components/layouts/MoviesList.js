import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import MovieContext from "../../context/movie/movieContext";
import Spinner from "../Spinner";

const MoviesList = ({ movieType }) => {
  const movieContext = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const [button, setButton] = useState(false);
  const [movieRun, setMovieRun] = useState(false);

  useEffect(() => {
    handleEffect();
    //eslint-disable-next-line
  }, [movieContext.movieList]);

  const handleEffect = () => {
    !movieRun && movieContext.setMovieList(movieType);
    setMovieRun(true);
    setButton(false);
  };

  const handleClick = () => {
    movieContext.loadMore(page + 1, movieType);
    setPage(page + 1);
    setButton(true);
  };

  if (movieContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div className="flex flex-wrap">
        {movieContext.movieList.map((item, i) => (
          <div
            key={i}
            className="w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/5 block"
            style={{
              minHeight: "300px",
            }}
          >
            <Card carditem={item} />
          </div>
        ))}
        <button
          className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded block mx-auto mt-5"
          onClick={handleClick}
        >
          Load More
        </button>
      </div>
    );
  }
};

export default MoviesList;
