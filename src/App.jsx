import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Contact from "./features/contact/Contact";
import Layout from "./pages/Layout/Layout";
import MobileCar from "./features/mobilecar/MobileCar";
import Services from "./features/servicesPage/Services";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route element={<Layout />}>
          <Route path="/services" element={<Services />} />
          <Route path="/mobile-car" element={<MobileCar />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
