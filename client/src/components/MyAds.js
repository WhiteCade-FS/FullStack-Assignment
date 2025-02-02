import React from "react";
const MyAds = (props) => {
  return (
    <article style={styles.myArticle}>
      <img src={props.img} alt={props.alt} style={styles.img} />
      <h1>{props.title}</h1>
      <p>{props.about}</p>
      <div style={styles.cardButton}>
        <span type="submit" style={styles.cardButton}>
          Learn More
        </span>
      </div>
    </article>
  );
};
export default MyAds;
const styles = {
  myArticle: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    padding: "1%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    margin: "5%",
  },
};
