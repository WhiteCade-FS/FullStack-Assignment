import React from "react";
//Dummy Component
const MyBtn = (props) => {
  return (
    <button style={styles.buttonStyle} onClick={props.onClick}>
      {props.btnText}
    </button>
  );
};
export default MyBtn;
const styles = {
  buttonStyle: {
    backgroundColor: "black",
    color: "white",
    padding: "1%",
    margin: "1%",
    cursor: "pointer",
    height: "50px",
    width: "100px",
  },
};
