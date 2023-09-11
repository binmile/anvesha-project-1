import React, { CSSProperties } from "react";
import { Link, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Experience = () => {
  const experienceLinkStyle: CSSProperties = {
    display: "flex",
    flexDirection:'column',
    width: "60%",
    // border: "2px solid black",
    margin: "auto",
    alignItems: "center",
    height: "50px",
    justifyContent: "space-between",
    padding:'50px'
  };

  return (
    <div>
      <div >
        Experience
        <div className="links" style={experienceLinkStyle}>
          <Link to="freelancing">Freelancing</Link>
          <Link to="proff">Proffessional</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Experience;
