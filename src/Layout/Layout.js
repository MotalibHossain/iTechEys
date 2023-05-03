import React from 'react'
import { Outlet } from 'react-router-dom';

// Components import
import Header from "./Header";
import Footer from "./Footer.js";

const Layout = () => {
  return (
      <>
          <Header />
          <Outlet />
          <Footer />
      </>
  );
}

export default Layout