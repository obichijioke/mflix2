import React from "react";
import noposter from "../../images/no-movie-poster.jpg";

const EpisodeCard = ({ episode, episodeClick }) => {
  const { still_path, name, episode_number } = episode;

  const handleClick = () => {
    episodeClick(episode);
  };
  return (
    <div
      className="cardItem w-1/2 md:w-1/3 lg:w-1/5 p-2 relative cursor-pointer hvr-grow"
      style={{ minHeight: "0px" }}
      onClick={handleClick}
    >
      <img
        style={{
          display: "block",
          left: "0",
          top: "0",
          margin: "0rem",
          borderRadius: "10px",
          zIndex: "0",
        }}
        src={
          still_path
            ? `https://image.tmdb.org/t/p/w500/${still_path}`
            : noposter
        }
        alt={name && name}
      />
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: "2",
          left: "0rem",
          top: "0rem",
          height: "100%",
          width: "100%",
          paddingLeft: "1rem",
        }}
      >
        <h6 style={{ color: "#eaeaea", marginTop: "0.8rem" }}>
          Episode {episode_number}
        </h6>
        <div>
          <p style={{ color: "#eaeaea", marginBottom: "0.8rem" }}>{name}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};
export default EpisodeCard;
