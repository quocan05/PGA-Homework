import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
  // </Provider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
