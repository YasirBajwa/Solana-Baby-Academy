import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Intro from "./Intro";

function RoutePage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Intro />} />
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default RoutePage;
