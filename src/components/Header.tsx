import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        background: "#202020",
        color: "#fff",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>yt4g</h2>
      <nav>
        <Link to="/feed" style={{ color: "#fff", marginRight: "1rem" }}>
          Feed
        </Link>
        <Link to="/live" style={{ color: "#fff" }}>
          Live
        </Link>
      </nav>
    </header>
  );
}
