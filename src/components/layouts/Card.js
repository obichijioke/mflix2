import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const {
    title,
    poster_path,
    vote_average,
    release_date,
    original_name,
    first_air_date,
    id,
    media_type,
    movie_type,
    name,
  } = props.carditem;
  return (
    <Link
      to={`/${
        media_type || movie_type ? media_type || movie_type : "movie"
      }/${id}`}
    >
      <div className="block cursor-pointer p-2 rounded overflow-hidden mt-2">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="galaxy"
          className="hvr-grow w-full rounded-md"
        />
        <h6 className="text-base font-medium mt-4 mx-1">
          {name
            ? name
            : title === undefined
            ? original_name.length > 20
              ? original_name.slice(0, 20) + "..."
              : original_name
            : title.length > 20
            ? title.slice(0, 20) + "..."
            : title}
        </h6>
        <div className="flex justify-between mt-2 mx-1">
          <p className="text-gray-500">
            {release_date === undefined
              ? first_air_date && first_air_date.slice(0, 4)
              : release_date && release_date.slice(0, 4)}
          </p>
          <ul className="flex flex-no-wrap">
            <li>
              <i className="fas fa-heart fa-xs m-1 text-red-700"></i>
            </li>
            <li>
              <i className="fas fa-eye fa-xs m-2 text-red-700"></i>
            </li>
            <li>
              <i
                className="fas fa-star fa-xs mx-1"
                style={{ color: "rgb(253, 151, 64)" }}
              ></i>
              <span className="inline-block text-xs text-gray-500">
                {vote_average}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
export default Card;
