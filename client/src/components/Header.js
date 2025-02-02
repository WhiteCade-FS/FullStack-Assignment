import React from "react";
import MyIcons from "./MyIcons";
import ImageUrl from "../images/cade_white_profile_pic.jpg";
import LogoUrl from "../images/BlackTie.png";
import { FaSearch, FaEnvelope, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <div style={styles.logo}>
          <MyIcons IconImg={LogoUrl} />
        </div>
        <h1>CharacterSpace</h1>
      </div>
      <div style={styles.searchCont}>
        <span style={styles.inputIcon}>
          <FaSearch />
        </span>
        <input type="text" style={styles.inputWithIcon} placeholder="Search" />
      </div>
      <div style={styles.rightSide}>
        <button style={styles.rightIcons}>
          <FaEnvelope />
        </button>
        <button style={styles.rightIcons}>
          <Link to="/settings" style={styles.link}>
            <FaCog />
          </Link>
        </button>
        <button style={styles.profileImg}>
          <Link to="/profile" style={styles.link}>
            <MyIcons IconImg={ImageUrl} />
          </Link>
        </button>
      </div>
    </header>
  );
};
export default Header;
const styles = {
  header: {
    padding: "1%",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    borderRadius: "50%",
    height: "50px",
    width: "80px",
    marginRight: "5%",
    marginLeft: "5%",
    backgroundColor: "white",
    alignItems: "center",
  },
  searchCont: {
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
    width: "40%",
  },
  inputIcon: {
    background: "#ddd",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
  },
  inputWithIcon: {
    border: "none",
    flex: 1,
    padding: "5px",
  },
  rightSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: "3%",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  profileImg: {
    border: "none",
    backgroundColor: "transparent",
    borderRadius: "2px",
  },
};
