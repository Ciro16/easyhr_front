import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>login</h1>} />
        <Route path="/dashboard">
          <Route path="" element={<Dashboard />} />
          <Route path="page1" element={<Dashboard page={<Page1 />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
