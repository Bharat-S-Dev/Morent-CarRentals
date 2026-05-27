import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
    
      <Navbar />

      <main className="flex-shrink-0">
        <Outlet />
      </main>

      <Footer />
      
    </div>
  );
};

export default Layout;
