import React from "react";
import { Routes, Route } from "react-router-dom";
//Add the Header
import Header from "./components/Header";
// Add Images
import CocaCola_Santa from "./images/CocaCola_Santa.jpg";
import LaysAd from "./images/LaysAd.png";
import MobileFortnite from "./images/MobileFortnite.jpg";
//Add Navigation
import Nav from "./components/Nav";
//Add Advertisements
import MyAds from "./components/MyAds";
//Import Dash and Chart
import Dashboard from "./pages/Dashboard";
import ChartDash from "./pages/ChartDash";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Newsfeed from "./pages/Newsfeed";
import UserProfile from "./pages/UserProfile";
import Users from "./pages/Users";
// Start the App Function
function App() {
  return (
    <div>
      <Header pgTitle="CharacterSpace" />
      <div style={styles.container}>
        <Nav />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="chartDash" element={<ChartDash />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
            <Route path="newsfeed" element={<Newsfeed />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="users" element={<Users />} />
          </Routes>
        </main>
        <aside style={styles.ads}>
          Advertisements
          <MyAds
            img={CocaCola_Santa}
            alt={"This is an image of Santa Claus with a Coca-Cola."}
            title={"Winter is here, be festive and grab a Coca-Cola"}
            about={
              "Head to your local store and grab a Coca-Cola with Santa today!"
            }
          />
          <MyAds
            img={LaysAd}
            alt={
              "A picture of Lionel Messi, Paul Pogba, and Lieke Martens on a Lays Ad."
            }
            title={"Grab a pack of Lays Potato Chips and Win!"}
            about={
              "You could be a lucky winner of a trip to the FIFA World Cup by purchasing a bag of Lays Potato Chips today!"
            }
          />
          <MyAds
            img={MobileFortnite}
            alt={"This is an image of Fortnite on an Iphone."}
            title={"Fortnite is now mobile!"}
            about={
              "Head to the App Store and get your copy of Fortnite Mobile now!"
            }
          />
        </aside>
      </div>
    </div>
  );
}
// }
export default App;
// Styling for the dashboard is below
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background: "WhiteSmoke",
    color: "",
    height: "100%",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "99%",
  },
  ads: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 20,
    color: "lightgray",
    alignItems: "center",
    flexWrap: "wrap",
  },
  logo: {
    height: "50px",
    width: "50px",
  },
  toggleButton: {
    alignSelf: "flex-end",
    margin: "10px",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
  },
};
