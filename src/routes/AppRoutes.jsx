import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FAQ from "../pages/FAQ";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} /> {/* ✅ THIS */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}