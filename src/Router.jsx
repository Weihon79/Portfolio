import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ProjectDetails from "./pages/projectdetails/ProjectDetails";
import NotFound from "./pages/notfound/NotFound";
import ScrollToTop from "./components/Utils/ScrollToTop";

const AppRouter = () => {
  return (
    <Router basename="/Portfolio">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:id" element={<ProjectDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
