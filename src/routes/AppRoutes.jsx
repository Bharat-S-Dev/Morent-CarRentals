import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "../layout/Layout";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home";
import Category from "../pages/Category";
import CarDetails from "../pages/CarDetails";
import Payment from "../pages/Payment";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: "category", element: <Category /> },
      { path: "car/:id", element: <CarDetails /> },
      
      {
        element: <ProtectedRoute />, 
        children: [
          { path: "payment/:id", element: <Payment /> },
          { path: "dashboard", element: <Dashboard /> },
        ],
      },
      
      { path: "*", element: <NotFound /> },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

export default router;