import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./components/loader/Loader";
import { ServiceProvider } from "./features/servicesPage/contexts/ServiceContext";
import ScrollToTop from "./utils/ScrollToTop";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Contact = lazy(() => import("./features/contact/Contact"));
const Layout = lazy(() => import("./pages/Layout/Layout"));
const MobileCar = lazy(() => import("./features/mobilecar/MobileCar"));
const Services = lazy(() => import("./features/servicesPage/Services"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route element={<Layout />}>
            <Route
              path="/services"
              element={
                <ServiceProvider>
                  <Services />
                </ServiceProvider>
              }
            />
            <Route path="/mobile-car" element={<MobileCar />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
