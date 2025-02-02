import React, { useState } from "react";
import {
  FaEnvelope,
  FaNewspaper,
  FaDashcube,
  FaChartPie,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
//Dummy Component
const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  /*  I am creating a new feature here which is a drop down menu for the nav bar to clean it up.
      Because of this, I had to move my CSS-IN-JS into the Nav function so that my isOpen display could run, when it is outside of the scope the styling cant be applied as it cannot see the parameter from up here.
  */
  const styles = {
    navContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "8%",
      backgroundColor: "black",
    },
    navIcons: {
      color: "white",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonStyle: {
      backgroundColor: "lightgray",
      color: "black",
      padding: "1%",
      margin: "10%",
      cursor: "pointer",
      height: "40px",
      width: "100px",
      borderRadius: "10%",
      border: "1px solid white",
    },

    link: {
      color: "black",
      textDecoration: "none",
    },
    toggleButton: {
      backgroundColor: "lightgray",
      color: "black",
      padding: "10px",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    menu: {
      display: isOpen ? "block" : "none",
      backgroundColor: "white",
      position: "absolute",
      top: "50px",
      left: "0",
      border: "1px solid gray",
      borderRadius: "5px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
    },
    menuItem: {
      padding: "10px 20px",
      textDecoration: "none",
      color: "black",
      display: "flex",
      alignItems: "center",
    },
    menuItemHover: {
      backgroundColor: "lightgray",
    },
  };
  return (
    <div style={styles.navContainer}>
      <button style={styles.toggleButton} onClick={toggleMenu}>
        <FaBars />
      </button>
      {isOpen && (
        <span style={styles.navIcons}>
          <button style={styles.buttonStyle}>
            <Link to="/dashboard" style={styles.link}>
              <FaDashcube />
              <br />
              Dashboard
            </Link>
          </button>
          <button style={styles.buttonStyle}>
            <Link to="/chartDash" style={styles.link}>
              <FaChartPie />
              <br />
              Charts
            </Link>
          </button>
          <button style={styles.buttonStyle}>
            <Link to="/messages" style={styles.link}>
              <FaEnvelope />
              <br />
              Messages
            </Link>
          </button>
          <button style={styles.buttonStyle}>
            <Link to="/newsfeed" style={styles.link}>
              <FaNewspaper /> <br />
              NewFeed
            </Link>
          </button>
          <button style={styles.buttonStyle}>
            <Link to="/profile" style={styles.link}>
              <FaUserCircle />
              <br />
              Profile
            </Link>
          </button>
          <button style={styles.buttonStyle}>
            <Link to="/users" style={styles.link}>
              <FaUserCircle />
              <br />
              Users
            </Link>
          </button>
        </span>
      )}
    </div>
  );
};
export default Nav;
