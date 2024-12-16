import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { router } from "./router/router.tsx";
import "./index.css";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <main className="dark text-foreground bg-background">
          <RouterProvider router={router} />
        </main>
      </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>
);
