import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/perfil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard">
          <Route path="" element={<Dashboard />} />
          <Route path="profile" element={<Dashboard page={<Profile />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
