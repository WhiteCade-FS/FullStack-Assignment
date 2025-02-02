import React from "react";
import MyBtn from "./buttons/Mybtn";
import AvatarIcon from "../images/cade_white_profile_pic.jpg";
const MyForm = (props) => {
  return (
    <form style={styles.myForm} onSubmit={props.addItem}>
      <div style={styles.inputContainer}>
        <img src={AvatarIcon} alt="Logo" style={styles.logo} />
        <input
          style={styles.input}
          placeholder="Title of Post"
          name="pName"
          value={props.pName}
          onChange={props.getInput}
        />
        <input
          style={styles.input}
          placeholder="Tell us about your day..."
          name="pDesc"
          value={props.pDesc}
          onChange={props.getInput}
        />

        <MyBtn btnText="Post" type="submit" />
      </div>
    </form>
  );
};
export default MyForm;
const styles = {
  myForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    // backgroundColor: "white",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "1%",
    padding: "1%",
    // border: "1px solid",
    width: "90%",
    height: "100%",
    boxShadow: "5px 10px 10px 10px gray",
    backgroundColor: "white",
  },
  input: {
    padding: "2%",
    width: "15%",
    height: "20%",
    border: "none",
    boxShadow: "5px 5px 5px 5px lightgray",
  },
  logo: {
    height: "75px",
    cursor: "pointer",
    borderRadius: "50%",
  },
};
