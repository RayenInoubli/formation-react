import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        color: "black",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          border: "none",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          color: "black",
        }}
      >
        <li>
          <NavLink
            style={(params) => ({
              color: params.isActive ? "red" : "black",
              textDecoration: "none",
            })}
            to="/hello"
          >
            Hello
          </NavLink>
        </li>
        <li>
          <NavLink
            style={(params) => ({
              color: params.isActive ? "red" : "black",
              textDecoration: "none",
            })}
            to="/tasks"
          >
            Tasks
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
