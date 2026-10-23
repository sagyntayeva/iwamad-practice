import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { LikesProvider } from "./context/LikesProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LikesProvider>
        <App />
      </LikesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
