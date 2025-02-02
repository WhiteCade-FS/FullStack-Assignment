import React, { Component } from "react";
import Monkey from "../images/Monkey_thinking.jpg";
import AvatarIcon from "../images/cade_white_profile_pic.jpg";
import MyForm from "../components/MyForm";
import PostArticle from "../components/PostArticle";

class Newsfeed extends Component {
  state = {
    post: [
      {
        pName: "John Jacob",
        pDesc:
          "Whenever I go out, the people always shout. I am so loved, but ughhhh...",
        pImg: Monkey,
        pAlt: "picture of some bread",
      },
    ],
    color: "red",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "black" });
    }, 5000);
  }
  getInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addItem = (e) => {
    e.preventDefault();
    this.setState({
      post: [
        ...this.state.post,

        {
          pImg: AvatarIcon,
          pName: this.state.pName,
          pDesc: this.state.pDesc,
          pAlt: this.state.pAlt,
        },
      ],
    });
    e.target.reset();
  };
  removeItem = (key) => {
    const newPost = this.state.post.filter((post, i) => i !== key);
    this.setState({ post: newPost });
  };
  render() {
    let myList = this.state.post.map((element, i) => {
      return (
        <PostArticle
          key={i}
          val={element}
          delMe={() => this.removeItem(i)}
          editMe={() => this.editItem(element)}
        />
      );
    });
    return (
      <main style={styles.main}>
        <MyForm getInput={this.getInput} addItem={this.addItem} />
        {myList}
      </main>
    );
  }
}
export default Newsfeed;
// Styling for the dashboard is below
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    background: "WhiteSmoke",
    color: "",
    height: "100%",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    paddingLeft: 20,
    paddingRight: 50,
    color: "lightgray",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
    alignItems: "center",
    width: "99%",
  },
  ads: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    paddingLeft: 20,
    paddingRight: 50,
    color: "lightgray",
  },
  logo: {
    height: "50px",
    width: "50px",
  },
};
