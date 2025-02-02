import React, { useEffect, useState } from "react";
const UserProfile = () => {
  //Here is where I use useEffect to bring in the information from the api
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((data) => {
          setUser(data.results[0]);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    };
    fetchUserData();
  }, []);
  // Here I am implementing a loading feature to let the user know their information is coming.
  if (!user) {
    return <div style={styles.loading}>Loading...</div>;
  }
  const {
    name: { first, last },
    location: { street, city, state, postcode },
    login: { username, password },
    phone,
    picture: { large },
  } = user;
  return (
    <div>
      <h1 style={styles.title}>Profile Page</h1>
      <div style={styles.container}>
        <img src={large} alt={`${first} ${last}`} style={styles.profilePic} />
        <h3 style={styles.name}>
          {first} {last}
        </h3>
        <p style={styles.info}>
          📍 {`${street.name}, ${city}, ${state} ${postcode}`}
        </p>
        <p style={styles.info}>👤 Username: {username}</p>
        <p style={styles.info}>🔑 Password: {password}</p>
        <p style={styles.info}>📞 Phone: {phone}</p>
      </div>
    </div>
  );
};
export default UserProfile;
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    margin: "20px auto",
  },
  title: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    marginBottom: "15px",
  },
  name: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  info: {
    fontSize: "16px",
    margin: "5px 0",
  },
  loading: {
    textAlign: "center",
    fontSize: "18px",
    padding: "20px",
  },
};
