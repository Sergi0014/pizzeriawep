import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals.jsx";

// Selecciona el elemento raíz en tu HTML
const container = document.getElementById("root");

// Crea una raíz y renderiza tu aplicación
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();