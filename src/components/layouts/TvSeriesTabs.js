import React, { useContext, useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Tabs } from "antd";
import EpisodeCardList from "./EpisodeCardList.js";
import EpisodeDetails from "./EpisodeDetails";
import MovieContext from "../../context/movie/movieContext";
import Casts from "./Casts";
const TabPane = Tabs.TabPane;

const TvSeriesTabs = ({ movieId }) => {
  //windows size hook
  const size = useWindowSize();

  //context
  const movieContext = useContext(MovieContext);
  const { movieDetails } = movieContext;

  //useEffect
  useEffect(() => {
    setId(movieId);
  }, [movieId]);

  //states
  const [episodeDetails, setEpisodeDetails] = useState(null);
  const [showEpisodeDetails, setShowEpisodeDetails] = useState(false);
  const [episodeList, setEpisodeList] = useState(null);
  const [seasonNumber, setSeasonNumber] = useState("1");
  const [id, setId] = useState("");
  const [tabKey, setTabKey] = useState(null);

  //functions
  const handleEpisodeClick = (data) => {
    setEpisodeDetails(data);
    setShowEpisodeDetails(true);
    setTabKey(data.episode_number + "");
  };

  const handleBack = () => {
    setShowEpisodeDetails(false);
    setEpisodeList(null);
  };

  return (
    <div className="bg-dark-800 relative mt-8 md:mt-16 mb-20 py-2" key={id}>
      {showEpisodeDetails === false ? (
        <Tabs
          defaultActiveKey="0"
          tabPosition={size.width > 700 ? "left" : "top"}
          style={{ height: 450 }}
          onTabClick={(activeKey) => {
            setSeasonNumber(activeKey);
          }}
        >
          <TabPane
            tab={
              <h6 className="text-left text-lg md:text-xl px-5 py-5 md:h-20 font-bold flex flex-col justify-center">
                Details
              </h6>
            }
            key="0"
          >
            {
              <div className="px-4 md:pr-8">
                <h5 className="text-xl mb-2 font-bold">Overview</h5>
                <p className="text-gray-500">
                  {movieDetails.overview &&
                    movieDetails.overview.slice(0, 200) + "..."}
                </p>
                <Casts />
              </div>
            }
          </TabPane>

          {movieDetails.seasons &&
            movieDetails.seasons.map((season, i) => (
              <TabPane
                tab={
                  <div className="px-5 py-5 md:h-20 flex flex-col justify-center">
                    <h6 className="text-left text-lg md:text-xl mb-2 font-bold">
                      {season.name}
                    </h6>
                    <p className="text-left text-xs md:text-sm text-gray-500">
                      {season.air_date && season.air_date.slice(0, 4)}
                    </p>
                  </div>
                }
                key={season.season_number}
              >
                <h4 className="text-xl px-4">{season.name && season.name}</h4>
                <div className="w-full px-4 md:pr-8 text-sm mt-5 text-gray-500">
                  {season.overview && season.overview.length > 200
                    ? season.overview.slice(0, 200) + "..."
                    : season.overview}
                  <EpisodeCardList
                    movie={movieId}
                    movieId={movieDetails.id}
                    seasonNum={seasonNumber}
                    episodeClick={handleEpisodeClick}
                    handleepisodeList={(list) => setEpisodeList(list)}
                  />
                </div>
              </TabPane>
            ))}
        </Tabs>
      ) : (
        <div key={tabKey}>
          <Tabs
            onTabClick={(activeKey) => {
              setEpisodeDetails(
                episodeList.filter(
                  (item) => item.episode_number === parseInt(activeKey)
                )[0]
              );
            }}
            defaultActiveKey={tabKey}
            tabPosition={size.width > 500 ? "left" : "top"}
            style={{ height: 450 }}
          >
            {episodeList &&
              episodeList.map((episode) => (
                <TabPane
                  tab={
                    <div className="px-5 py-5 md:h-20 flex flex-col justify-center">
                      <h6 className="text-left text-lg md:text-xl mb-2 font-bold">
                        {"Episode " + episode.episode_number}
                      </h6>
                      <p className="text-left text-xs md:text-sm text-gray-500">
                        {episode.air_date && episode.air_date.slice(0, 4)}
                      </p>
                    </div>
                  }
                  key={episode.episode_number + ""}
                >
                  <EpisodeDetails
                    handleBack={handleBack}
                    episodeDetails={episodeDetails}
                  />
                </TabPane>
              ))}
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default TvSeriesTabs;
