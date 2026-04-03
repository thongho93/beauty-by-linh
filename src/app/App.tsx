import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Priser from "@/pages/Priser";
import Footer from "@/components/layout/Footer";

export default function App() {
  return (
    <BrowserRouter>
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
          path="/priser"
          element={
            <>
              <Priser />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
