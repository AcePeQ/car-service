import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}
