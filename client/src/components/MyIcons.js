import React from "react";
//Dummy component
const MyIcons = (props) => {
  return (
    <img src={props.IconImg} alt={props.ImageAlt} style={styles.MyIcons} />
  );
};
export default MyIcons;
const styles = {
  MyIcons: {
    width: "50px",
    cursor: "pointer",
    height: "50px",
    borderRadius: "50%",
  },
};
