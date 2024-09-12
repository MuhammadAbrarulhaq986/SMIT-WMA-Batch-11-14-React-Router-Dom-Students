import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        margin: "30px",
        backgroundColor: "white", // Add background color
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)", // Add text shadow
      }}
    >
      <Link
        to=""
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          color: "black",
          textDecoration: "none",
        }}
      >
        Home
      </Link>
      <Link
        to="about"
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          color: "black",
          textDecoration: "none",
        }}
      >
        About
      </Link>
      <Link
        to="contact"
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          color: "black",
          textDecoration: "none",
        }}
      >
        Contact
      </Link>
      <Link
        to="service"
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          color: "black",
          textDecoration: "none",
        }}
      >
        Services
      </Link>
    </div>
  );
};

export default Navbar;
