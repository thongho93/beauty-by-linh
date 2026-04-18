import { useEffect, type ReactNode } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  type RouteProps,
} from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Priser from "@/pages/Priser";
import Tjenester from "@/pages/Tjenester";
import Galleri from "@/pages/Galleri";
import VippeextensionsPage from "@/pages/VippeextensionsPage";
import Footer from "@/components/layout/Footer";

const pageRoutes: RouteProps[] = [
  { path: "/", element: <HomePage /> },
  { path: "/tjenester", element: <Tjenester /> },
  { path: "/priser", element: <Priser /> },
  { path: "/galleri", element: <Galleri /> },
  { path: "/vippeextensions", element: <VippeextensionsPage /> },
];

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const id = hash.replace("#", "");

    const attemptScroll = (remainingTries: number) => {
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (remainingTries > 0) {
        window.setTimeout(() => attemptScroll(remainingTries - 1), 100);
      }
    };

    attemptScroll(10);
  }, [pathname, hash]);

  return null;
}

function PageWithFooter({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        {pageRoutes.map((pageRoute) => (
          <Route
            key={pageRoute.path}
            path={pageRoute.path}
            element={<PageWithFooter>{pageRoute.element}</PageWithFooter>}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
