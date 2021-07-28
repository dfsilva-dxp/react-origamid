import { Routes, Route } from "react-router-dom";

import { Home } from "../pages";
import Contanto from "../pages/contanto";
import Produto from "../pages/produto";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contanto />} />
        <Route path="produto/:id" element={<Produto />} />
      </Routes>
      <Footer/>
    </>
  );
}
