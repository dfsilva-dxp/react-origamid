import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="transaction/:type" element={<Transactions />} /> */}
      </Routes>
  );
}
