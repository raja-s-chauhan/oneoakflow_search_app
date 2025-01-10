import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../screens/HomPage";
import ResultsPage from "../screens/ResultsPage";

const IndexRoute = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    );
  };
  
  export default IndexRoute;