import {BrowserRouter, Routes, Route } from "react-router-dom";
import{ Login } from "./pages/Login";
import{ Boletim } from "./pages/Boletim";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/boletim" element={<Boletim />} />
    </Routes>
    </BrowserRouter>
  );
}
