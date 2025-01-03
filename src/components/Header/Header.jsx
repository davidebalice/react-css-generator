import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Context } from "../Context/BoxContext";

export default function Header() {
  return (
    <header className="header">
      <Link to={"/"} className="logo">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          className="logoImg"
          alt="logo"
        />
        <p>Css Generator</p>
      </Link>

      <a
        href="https://github.com/davidebalice/react-css-generator"
        target="_blank"
        rel="noreferrer"
        className="githubContainer"
      >
        <p className="githubText">
          View project
          <br />
          on GitHub
        </p>
        <img
          src={process.env.PUBLIC_URL + "/images/github.png"}
          className="github"
          alt="github"
        />
      </a>
    </header>
  );
}
