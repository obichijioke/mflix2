import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieContext from "../../context/movie/movieContext";
import Spinner from "../Spinner";
import CastItem from "./CastItem";
import { Col, Row } from "antd";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        background:
          "linear-gradient(to left, rgb(0, 0, 0), rgba(67, 67, 67, 0.07))",
        position: "absolute",
        width: "10%",
        height: "100%",
        right: "0",
        top: "0",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        zIndex: "1",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right fa-3x"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, rgb(0, 0, 0), rgba(67, 67, 67, 0.07))",
        position: "absolute",
        width: "10%",
        height: "100%",
        textAlign: "center",
        top: "0",
        display: "flex",
        flexDirection: "column",
        zIndex: "1",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left fa-3x"></i>
    </div>
  );
}

const Casts = () => {
  const movieContext = useContext(MovieContext);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (movieContext.casts.cast === []) {
    return <Spinner />;
  } else {
    return (
      <div className="w-full">
        <div className="relative">
          <h5 className="my-4 font-medium text-lg">Cast</h5>
          <div className="flex flex-wrap overflow-y-auto h-64 scrollbarHide">
            {movieContext.casts.cast &&
              movieContext.casts.cast.map((item, i) => (
                <div className="w-1/2 md:w-1/3 lg:w-1/5 p-1" key={i}>
                  <CastItem item={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Casts;
