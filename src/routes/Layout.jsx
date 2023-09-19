/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from '../pages/navbar/Navabr';
import Footer from '../pages/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
