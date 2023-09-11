import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Experience from "../Experience";
import FreeLancing from "../FreeLancing";
import Professional from "../Professional";

const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="" />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="experience" element={<Experience />}>
          <Route path="freelancing" element={<FreeLancing />} />
          <Route path="proff" element={<Professional />} />
        </Route>
      </Routes>
    </div>
  );
};

export default PublicRoutes;
