import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: "#f8f8f8", padding: "20px", textAlign: "center" }}>
      <h1>Prathamesh Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
}

export default Header;
