import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/404";
import LoginPage from "./pages/login";
import React from "react";
import ReactDOM from "react-dom/client";
import RegisterPage from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
