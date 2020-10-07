import React from "react";
import spinner from "../images/spinner.gif";

function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img
        src={spinner}
        alt="loading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
}
export default Spinner;
