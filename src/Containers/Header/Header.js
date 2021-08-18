import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <Link className="logo" to="/">
          SayWhat
        </Link>
      </div>
      <div className="header-links">
        <Link className="header-link" to="/music">
          Music
        </Link>
        <Link className="header-link" to="/media">
          Media
        </Link>
        <Link className="header-link" to="/merch">
          Merch
        </Link>
        <Link className="header-link" to="/tools">
          Tools
        </Link>
      </div>
    </header>
  );
}
