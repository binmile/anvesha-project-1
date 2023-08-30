import React, { CSSProperties } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const containerStyle : CSSProperties = {
    display: "flex",
    width:'60%',
    margin:'auto',
    alignItems: "center",
    height:'150px',
    justifyContent: "space-between"
  }; 

  return (
    <div style={containerStyle}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/experience">Experience</NavLink>
    </div>
  );
};

export default Navbar;
