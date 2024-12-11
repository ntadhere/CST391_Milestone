import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">
          Navbar
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {/* =======================
            ====== THIS FOR BLOG====== */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                List of Blogs
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/show_blog"
                  >
                    View List
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/new_blog"
                  >
                    New Blog
                  </Link>
                </li>
              </ul>
            </li>

            {/* ===============================
            ======== THIS FOR AUTHOR ========= */}

            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                List of Authors
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/authors"
                  >
                    View List
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/new_author"
                  >
                    New Author
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
