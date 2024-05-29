import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/Product.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<ProductPage />} />
      </Routes>
    </Router>{" "}
  </React.StrictMode>,
);
