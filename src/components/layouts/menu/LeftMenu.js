import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "../../../App.css";

const LeftMenu = ({ handleClick, current }) => {
  const menuItemStyle = { marginLeft: "0rem" };
  return (
    <div style={{ display: "flex" }}>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ background: "#13172200", color: "white", borderBottom: "0px" }}
      >
        <Menu.Item key="home" style={menuItemStyle}>
          <Link to="/">
            <span className="text-gray-200">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="movies" style={menuItemStyle}>
          <Link to="/movies">
            <span className="text-gray-200">Movies</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="tvseries" style={menuItemStyle}>
          <Link to="/tvs">
            <span className="text-gray-200">TV</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default LeftMenu;
