import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
// import { Card } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <Card /> */}
      <Outlet />
    </>
  );
};

export default Layout;
