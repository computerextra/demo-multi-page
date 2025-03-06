import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Kontakt from "./Pages/Kontakt";
import RootLayout from "./RootLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="demo-multi-page" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Kontakt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
