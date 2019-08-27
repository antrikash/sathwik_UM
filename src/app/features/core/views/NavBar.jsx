import React from "react";
import { NavLink } from "react-router-dom";
import "features/core/styles/NavBar";

export const NavBar = ({ location }) => {
  return (
    <nav className="bg-dark full-height">
      <ul className="nav flex-column text-center">
        <li className="nav-item my-2">
          <NavLink to="/" exact className="nav-NavLink" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item my-2">
          <NavLink
            to="/createuser"
            className="nav-NavLink"
            activeClassName="active"
          >
            Create User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
