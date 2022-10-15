import React from "react";
import { BrowserRouter, Route, Routes as RoutesHolder } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Application from "../pages/Application/Application";


const PageRoutes = () => {
  return (
    <BrowserRouter>
      <RoutesHolder>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/application" element={<Application></Application>}></Route>
      </RoutesHolder>
    </BrowserRouter>
  );
};

export default PageRoutes;
