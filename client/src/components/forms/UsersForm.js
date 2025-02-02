import React from "react";
import MyInput from "../forms/MyInput";
import MyBtn from "../buttons/Mybtn";

const UsersForm = (props) => {
  return (
    <form onSubmit={props.addUser} style={styles.UsersForm}>
      <p>Add Users:</p>
      <label>First Name:</label>
      <MyInput
        id="fName"
        type="text"
        placeholder="First Name"
        value={props.fName}
        name="fName"
        onChange={props.fNameInput}
      />
      <label>Last Name:</label>
      <MyInput
        id="lName"
        type="text"
        placeholder="Last Name"
        value={props.lName}
        name="lName"
        onChange={props.lNameInput}
      />
      <label>Email:</label>
      <MyInput
        id="email"
        type="text"
        placeholder="Email"
        value={props.email}
        name="email"
        onChange={props.emailInput}
      />
      <MyBtn btnText="Add User" />
    </form>
  );
};

export default UsersForm;

const styles = {
  UsersForm: {
    backgroundColor: "lightgrey",
  },
};
