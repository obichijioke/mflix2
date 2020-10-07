import React, { useContext, useState } from "react";
import "../../../App.css";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";
import MovieContext from "../../../context/movie/movieContext";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import Search from "../../Search";

export default function MenuBar(props) {
  const movieContext = useContext(MovieContext);

  const [current, setCurrent] = useState({ current: "home" });

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({
      current: e.key,
    });
  };
  return (
    <nav className="nav">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          className="logo"
          src={logo}
          alt="logo"
          style={{ marginRight: "4rem" }}
        />
        <LeftMenu handleClick={handleClick} current={current.current} />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Search />
        <RightMenu handleClick={handleClick} current={current.current} />
      </div>
    </nav>
  );
}
