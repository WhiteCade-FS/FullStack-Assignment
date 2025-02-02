import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { saveUser, getUser } from "../services/userService";
import UsersList from "../components/cards/UsersList";
import UsersForm from "../components/forms/UsersForm";
function Users() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [resp, setResp] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser()
      .then((result) => {
        console.log(result.data.result);
        setUsers(result.data.result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const fNameInput = (e) => {
    console.log(e.target.value);
    setfName(e.target.value);
  };
  const lNameInput = (e) => {
    console.log(e.target.value);
    setlName(e.target.value);
  };
  const emailInput = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    saveUser(fName, lName, email)
      .then((result) => {
        setUsers(result.data.result);
        setfName("");
        setlName("");
        setEmail("");
        setResp(result.data.message);
      })
      .catch((err) => {
        console.log("Error: ", err.message);
        setResp("Error: ", err.message);
      });
  };

  return (
    <section style={styles.container}>
      <h1>Users</h1>
      <Title resp={resp} />
      <UsersForm
        fName={fName}
        lName={lName}
        email={email}
        fNameInput={fNameInput}
        lNameInput={lNameInput}
        emailInput={emailInput}
        addUser={addUser}
      />

      <UsersList users={users} />
    </section>
  );
}

export default Users;

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f4f4f4",
  },
};
