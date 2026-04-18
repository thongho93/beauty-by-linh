import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "@/pages/HomePage";
import Priser from "@/pages/Priser";
import Tjenester from "@/pages/Tjenester";
import Galleri from "@/pages/Galleri";
import VippeextensionsPage from "@/pages/VippeextensionsPage";
import Footer from "@/components/layout/Footer";

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    // Wait a tick for the page to render before scrolling
    const id = hash.replace("#", "");
    const attempt = (tries: number) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 100);
      }
    };
    attempt(10);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/tjenester"
          element={
            <>
              <Tjenester />
              <Footer />
            </>
          }
        />
        <Route
          path="/priser"
          element={
            <>
              <Priser />
              <Footer />
            </>
          }
        />
        <Route
          path="/galleri"
          element={
            <>
              <Galleri />
              <Footer />
            </>
          }
        />
        <Route
          path="/vippeextensions"
          element={
            <>
              <VippeextensionsPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
