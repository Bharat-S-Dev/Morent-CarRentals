import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
