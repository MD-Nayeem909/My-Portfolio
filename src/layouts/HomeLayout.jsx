import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import BackToTop from "../component/BackToTop";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-285px)]">
        <Outlet />
      </main>
      <BackToTop />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
