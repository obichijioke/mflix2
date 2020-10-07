import React, { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import MovieContext from "../../context/movie/movieContext";

const VideoPlayer = ({
  handlePreviewEnd,
  videoUrl,
  title,
  date,
  runtime,
  genres,
  seasons,
}) => {
  const movieContext = useContext(MovieContext);
  useEffect(() => {
    if (videoUrl === null) {
      handlePreviewEnd();
    } else {
      return;
    }
  }, []);

  return (
    <div className="player-wrapper">
      <div className="absolute bg-black top-0 left-0 bg-opacity-50 z-10 w-full h-full">
        <div className="relative w-full h-full top-0 left-0">
          <div
            className="absolute w-full h-full top-0 left-0"
            style={{
              background: "rgb(0,0,0)",
              background:
                "linear-gradient(0deg, rgba(0,0,0,0) 76%, rgba(0,0,0,0.9500175070028011) 85%)",
            }}
          ></div>

          <div
            className="absolute w-full h-full bottom-0 left-0"
            style={{
              background: "rgb(0,0,0)",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 66%, rgba(0,0,0,0.9500175070028011) 79%)",
            }}
          >
            <div className="relative w-full h-full flex flex-col justify-end pb-2 lg:pb-8">
              <h2 className="text-gray-400 text-2xl lg:text-5xl font-medium mb-2 mx-8 uppercase">
                {title}
              </h2>

              <div className="mx-8 mb-2">
                <p className="text-gray-400">
                  {date ? (
                    <>
                      ({date?.slice(0, 4)}){" "}
                      <span className="ml-2 text-gray-400">
                        <span className="text-gray-400">
                          {Math.floor(runtime / 60)}h
                        </span>{" "}
                        {runtime % 60}min
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-400">Seasons {seasons}</span>
                  )}
                </p>
                <p className="text-gray-400 mb-4">
                  {genres?.map((genre, i, arr) => (
                    <span className="text-gray-400" key={genre.id}>
                      {genre.name + (i < arr.length - 1 ? "," : "") + " "}
                    </span>
                  ))}
                </p>
                <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <span>WATCH</span>
                  <svg
                    className="fill-current w-6 h-4 ml-1 mb-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactPlayer
        onEnded={handlePreviewEnd}
        className="react-player"
        width="100%"
        height="100%"
        url={videoUrl}
        playing
      />
    </div>
  );
};

export default VideoPlayer;
