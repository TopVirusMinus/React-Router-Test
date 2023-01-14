import React from "react";
import { NavLink, useParams } from "react-router-dom";

export const Header = () => {
  let questionId = -1;
  const { questionParamId } = useParams();
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
          <NavLink to={`${questionId}/faq`} end>
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
