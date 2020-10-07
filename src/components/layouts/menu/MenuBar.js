import React, { useState } from "react";
import "../../../App.css";
import logo from "../../../images/logo.png";
import LeftMenu from "./LeftMenu";

export default function MenuBar(props) {
  const [current, setCurrent] = useState({ current: "home" });

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({
      current: e.key,
    });
  };
  return (
    <nav className="nav relative lg:absolute">
      <div className="flex justify-between w-full">
        <img className="w-16" src={logo} alt="logo" />
        <LeftMenu handleClick={handleClick} current={current.current} />
      </div>
    </nav>
  );
}
