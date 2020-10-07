import React, { useEffect, useContext, useState } from "react";
import EpisodeCard from "./EpisodeCard.js";
import Spinner from "../Spinner";
import MovieContext from "../../context/movie/movieContext";

const EpisodeCardList = ({
  movieId,
  seasonNum,
  movie,
  episodeClick,
  handleepisodeList,
}) => {
  const [fetched, setFetched] = useState(false);
  const [episodes, setEpisodes] = useState(null);

  const movieContext = useContext(MovieContext);

  useEffect(() => {
    setFetched(false);
    getData();
    //eslint-disable-next-line
  }, [movie]);

  useEffect(() => {
    setEpisodes(
      movieContext.episodeList && movieContext.episodeList[seasonNum]
    );
  }, [movieContext.episodeList, seasonNum]);

  useEffect(() => {
    handleepisodeList(episodes);
    //eslint-disable-next-line
  }, [episodes]);

  const getData = () => {
    if (fetched === false) {
      movieContext.setEpisodeList(movieId, seasonNum);
      setFetched(true);
    } else {
      return;
    }
  };

  if (episodes === null) {
    return <Spinner />;
  } else {
    return (
      <div
        className="flex flex-wrap w-full overflow-y-auto mt-4 scrollbarHide"
        key={episodes}
        style={{ height: "20rem" }}
      >
        {episodes &&
          episodes.map((episode, i) => (
            <EpisodeCard
              episode={episode}
              key={i}
              episodeClick={episodeClick}
            />
          ))}
      </div>
    );
  }
};

export default EpisodeCardList;
