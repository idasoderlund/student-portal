import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RegistrationProvider } from "./components/RegisterForm.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <RegistrationProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </RegistrationProvider>
);
