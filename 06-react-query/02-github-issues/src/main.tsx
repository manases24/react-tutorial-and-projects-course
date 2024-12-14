import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ListView } from "./issues/views/ListView.tsx";
import { IssueView } from "./issues/views/IssueView.tsx";
import App from "./App.tsx";
import "./index.css";
import { ListViewInfinite } from "./issues/views/ListViewInfinite.tsx";

export const router = createBrowserRouter([
  {
    path: "/issues",
    element: <App />,
    children: [
      { path: "list", element: <ListView /> },
      { path: 'list-infinite', element: <ListViewInfinite /> },
      { path: "issue/:issueNumber", element: <IssueView /> },
      { path: "*", element: <Navigate to="list" /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="issues/list" />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
