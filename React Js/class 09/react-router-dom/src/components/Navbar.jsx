import React from "react";
import styles from "./style.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className={styles.navbarWrappper}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.normalLink
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.normalLink
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.normalLink
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
