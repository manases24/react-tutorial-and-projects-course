import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "./tutorial/09-context-api/ThemeContext.tsx";
import { App } from "./App.tsx";
import "./index.css";


createRoot(document.getElementById("root")!).render(
  <Theme>
    <StrictMode>
      <App />
    </StrictMode>
  </Theme>
);
