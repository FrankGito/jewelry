import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/Product.tsx";
import CheckoutPage from "./pages/Checkout.tsx";
import Phala from './Phala.tsx'
import Three from './components/canvas/Three.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<ProductPage />} />
        <Route path="/Product/:id" element={<ProductPage />} />
        <Route path="/Checkout" element={<CheckoutPage />} />
        <Route path="/Phala" element={<Phala />} />
        <Route path="/Three" element={<Three />} />
      </Routes>
    </Router>{" "}
  </React.StrictMode>,
);
