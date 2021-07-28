import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import Dashboard from "../pages/dashboard";

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
  );
}
