import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <h1>Learn code</h1>
      <ul>
        <li>
          <NavLink to="/" end>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" end>
            faq
          </NavLink>
        </li>
        <NavLink to="/contact" end>
          contact
        </NavLink>
      </ul>
    </div>
  );
};
