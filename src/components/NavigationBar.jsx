import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg shadow"
        style={{
          background: "linear-gradient(90deg, #2E8B57, #3CB371)",
          padding: "12px 20px",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand fw-bold text-white fs-4"
            to="/"
            style={{ letterSpacing: "1px" }}
          >
            Pet Adoption
          </Link>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">

              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-white fw-semibold"
                  to="/"
                >
                  Add Pet
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-white fw-semibold"
                  to="/view"
                >
                  View Pets
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-white fw-semibold"
                  to="/search"
                >
                  Search Adoptions
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-white fw-semibold"
                  to="/delete"
                >
                  Delete
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;