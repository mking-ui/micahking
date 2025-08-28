"use client";
import { useState } from "react";
export default function Navbar() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme + "-theme";
  };

  return (
    <header className="navbar navbar-expand-lg  sticky-top soft-shadow">
      <div className="container">
        <h2 className="fw-bold m-0">micah<span className="text-warning fw-light">king</span></h2>
       
        <button
          className="navbar-toggler shadow-none text-warning border-0 "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-warning"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto  justify-content-end align-items-end mb-2 mb-lg-0 x">
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/teams">
                Teams
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faqs">
                FAQs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <button onClick={toggleTheme} className="theme-toggle">
              <i
                className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"}`}
              ></i>
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}
