import React from "react";
import "../styles/Nav.css";

const styles = {
  navUl: {
    margin: "20px",
    justifyContent: "space-between",
    minWidth: "300px",
  },
  navA: {
    color: "white",
    fontSize: "x-large"
  },
};

function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar-custom navbar navbar-expand-lg">
      <ul className="navbar-nav" style={styles.navUl}>
        <li className="nav-item" id="hover-one">
          <a
            style={styles.navA}
            href="#about"
            onClick={() => handlePageChange("About")}
            className={
              currentPage === "About" ? " nav-link active" : " nav-link"
            }
          >
            About
          </a>
        </li>
        <li className="nav-item" id="hover-two">
          <a
            style={styles.navA}
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "About" ? " nav-link active" : " nav-link"
            }
          >
            Projects
          </a>
        </li>
        <li className="nav-item" id="hover-three">
          <a
            style={styles.navA}
            href="#projects"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "About" ? " nav-link active" : " nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item" id="hover-three">
          <a
            style={styles.navA}
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "About" ? " nav-link active" : " nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
