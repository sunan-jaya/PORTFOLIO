// MODUL NODE
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// KOMPONEN CSS
import "./index.css";
import 'lenis/dist/lenis.css';

// KOMPONEN JS
import App from "./App.jsx";

// RENDER APLIKASI KE DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);