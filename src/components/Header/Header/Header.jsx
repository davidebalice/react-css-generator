import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Context } from "../../Context/ContextProvider";

export default function Header() {
  return (
    <header className="header">
      <Link to={"/"} className="logo">
        <span style={{ color: "rgba(197, 18, 205, 1)" }}>Css</span> Generator
      </Link>
    </header>
  );
}
