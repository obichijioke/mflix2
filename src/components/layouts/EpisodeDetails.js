import React from "react";

const EpisodeDetails = ({ handleBack, episodeDetails }) => {
  return (
    <div className="w-full bigHeight overflow-y-auto scrollbarHide">
      <div className="px-4 flex justify-between">
        <h2 className="text-lg font-bold text-white">
          Season {episodeDetails.season_number}{" "}
          <span className="pl-2 text-lg font-normal text-gray-500">
            Episode {episodeDetails.episode_number}
          </span>
        </h2>
        <p
          onClick={handleBack}
          className="text-gray-500 font-bold text-lg cursor-pointer md:pr-4"
        >
          Back
        </p>
      </div>

      <div className="p-1 w-full md:flex">
        <div className="md:w-1/2 p-4">
          <img
            className="rounded w-full"
            src={`https://image.tmdb.org/t/p/original/${episodeDetails.still_path}`}
            alt=""
          />
        </div>
        <div className="md:w-1/2 p-4">
          <h4 className="text-gray-300 font-bold text-lg mb-4">
            {episodeDetails.name}
          </h4>
          <p className="text-gray-500">{episodeDetails.overview}</p>
        </div>
      </div>
      <div className="w-full md:flex mt-12">
        <div className="md:w-1/2 p-4">
          <h4 className="text-gray-300 font-bold text-lg mb-4">Crew</h4>
          <ul>
            {episodeDetails.crew.map((crew, i) => (
              <li className="flex my-2" key={i}>
                <p className="w-1/2 text-left text-gray-500">{crew.job}</p>
                <p className="w-1/2 text-left text-red-800">{crew.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 p-4">
          <h4 className="text-gray-300 font-bold text-lg mb-4">Guest Stars</h4>
          <ul>
            {episodeDetails.guest_stars.map((guest, i) => (
              <li className="flex my-2" key={i}>
                <p className="w-1/2 text-left text-gray-500">
                  {guest.character}
                </p>
                <p className="w-1/2 text-left text-red-800">{guest.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetails;
