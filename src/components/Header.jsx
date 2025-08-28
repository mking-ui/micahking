"use client";
import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme + "-theme";
  };

  return (
    <header className="py-3  sticky-top">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="fw-bold m-0">micah<span className="text-warning fw-light">king</span></h2>
        <nav className="d-none d-lg-flex gap-4">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Project</a>
          <a href="#" className="nav-link">Contact</a>
          <a href="#" className="nav-link">About</a>
        </nav>
        <button onClick={toggleTheme} className="theme-toggle">
          <i className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"}`}></i>
        </button>
      </div>
    </header>
  );
}
