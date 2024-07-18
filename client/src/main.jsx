import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Creations from "./pages/Creations";
import Custom from "./pages/Custom";
import App from "./App";
import { productsLoader } from "./services/api.service"; 

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/creations",
        element: <Creations />,
        loader: productsLoader, 
      },
      {
        path: "/custom",
        element: <Custom />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
