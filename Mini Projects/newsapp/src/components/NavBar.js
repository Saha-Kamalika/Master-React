import React from "react";
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <a className="navbar-brand mx-2" href="/">
          NewsMonkey
        </a>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mx-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/business">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/entertainment">
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/general">
                General
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/health">
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/science">
                Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sports">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/technology">
                Technology
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
