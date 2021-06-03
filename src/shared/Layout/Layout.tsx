import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./style/Layout.css";

const Layout = ({ children }: any) => {
  return (
    <>
      <div className="App">
        <Header />
        <div className="flex-shrink-0 content">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
