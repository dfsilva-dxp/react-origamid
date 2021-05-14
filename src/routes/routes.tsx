import { Routes, Route } from "react-router-dom";
import { LayoutComponent } from "../components/LayoutComponent";
import { Dashboard } from "../pages/Dashboard";
import { Transactions } from "../pages/Transactions";

export function AppRoutes() {
  return (
    <LayoutComponent>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transaction/:type" element={<Transactions />} />
      </Routes>
    </LayoutComponent>
  );
}
