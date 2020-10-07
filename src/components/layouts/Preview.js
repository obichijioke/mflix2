import React, { useState, useEffect } from "react";
import { Progress } from "antd";
import VideoPlayer from "../layouts/VideoPlayer";

export default function Preview({
  videoUrl,
  backDrop,
  overview,
  genres,
  title,
  poster,
  rate,
  date,
  runtime,
  seasons,
}) {
  useEffect(() => {
    handlePreviewVideo();
    return () => {
      setShowTrailer(false);
    };
  }, [title]);

  const [showTrailer, setShowTrailer] = useState(false);

  const handlePreviewVideo = () => {
    setTimeout(() => {
      setShowTrailer(true);
    }, 5000);
  };

  const handlePreviewEnd = () => {
    setShowTrailer(false);
  };

  return (
    <div className="relative w-full">
      {showTrailer ? (
        <VideoPlayer
          videoUrl={videoUrl}
          handlePreviewEnd={handlePreviewEnd}
          title={title}
          genres={genres}
          date={date}
          runtime={runtime}
          seasons={seasons}
        />
      ) : (
        <>
          {backDrop && (
            <img
              className="w-full h-auto"
              src={`https://image.tmdb.org/t/p/original/${backDrop}`}
              alt="postercover"
            />
          )}

          <div className="absolute top-0 left-0 h-full w-full bg-black bg-gradient-to-r from-black opacity-50"></div>
          <div className="absolute left-0 top-0 flex mt-32 mx-10">
            {poster && (
              <img
                className="w-1/5 rounded-md mx-5 my-4 shadow-lg hidden md:block"
                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                alt="posterImage"
              />
            )}
            <div className="flex flex-col justify-center pl-4">
              <div className="">
                <p className="text-xs md:text-sm">
                  <Progress
                    type="circle"
                    strokeColor="#9b2c2c"
                    strokeWidth={10}
                    width={40}
                    percent={Math.round((rate / 10) * 100 * 100) / 100}
                    format={(percent) => (
                      <div className="text-gray-100 font-medium text-shadow-md">
                        {percent / 10}
                      </div>
                    )}
                  />
                </p>
                <ul className="flex text-xs md:text-sm">
                  {genres?.map((item, i, arr) => (
                    <li
                      className="mr-1 text-gray-300 text-shadow-md"
                      key={item.id}
                    >
                      {item.name + (i < arr.length - 1 ? "," : "")}
                    </li>
                  ))}
                </ul>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold md:my-3 my-1 text-shadow-md">
                {title}
              </h1>
              <h5 className="text-sm md:text-xl font-medium my-1 md:my-2 text-gray-300 text-shadow-md">
                Overview
              </h5>
              <p className="text-xs md:text-sm text-gray-400 text-shadow-md">
                {overview && overview.length > 200
                  ? overview.slice(0, 200) + "..."
                  : overview}
              </p>
              <div className="">
                <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mx-auto mt-5 inline-block shadow-lg mr-4">
                  Trailer
                </button>
                <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mx-auto mt-5 inline-block shadow-lg">
                  Watch
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
