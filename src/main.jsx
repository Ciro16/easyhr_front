import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import Profile from "./pages/profile";
import OrganizationalChart from "./pages/organizational-chart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard">
          <Route path="" element={<Dashboard page={<Home />} />} />
          <Route path="profile" element={<Dashboard page={<Profile />} />} />
          <Route
            path="organizational-chart"
            element={<Dashboard page={<OrganizationalChart />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
