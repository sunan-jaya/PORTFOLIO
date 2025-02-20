// NODE MODULES //
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// KOMPONEN CSS //
import "./index.css";
import 'lenis/dist/lenis.css';

//KOMPONEN JS //
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>   
    <App />
  </StrictMode>
);
