import React from "react";
import Greet from "./components/States/Greet";
import ListAndKeys from "./components/LIstAndKeys/ListAndKeys";
import { personList } from "./components/DummyData";
import UseEffect from "./components/useEffect/UseEffect";
import { personPropsListArray } from "./components/DummyData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Routes/Navbar";
import Context from "./components/Context/Context";
import PublicRoutes from "./components/Routes/PublicRoutes/PublicRoutes";
import { RouteManager } from "./components/Routes/RouteManager";

const AllRoutes = () => {
  return (
    <div>
      <Greet name="Anvesha" messageCount={20} isLoggedIn={false} />
      <hr />
      <ListAndKeys persons={personList} />
      <hr />
      <Navbar />
      <RouteManager />
      <hr />
      <Context />
      <hr />
    </div>
  );
};

export default AllRoutes;
