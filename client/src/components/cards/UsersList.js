const UsersList = ({ users, _id, removeUsers }) => {
  if (!Array.isArray(users)) {
    return <p>User Added</p>;
  }

  return (
    <>
      {users.map((user) => (
        <article key={user._id} style={styles.list}>
          <p>First Name: {user.fName}</p>
          <p>Last Name: {user.lName}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => removeUsers(_id)}>x</button>
        </article>
      ))}
    </>
  );
};

export default UsersList;

const styles = {
  list: {
    padding: "0.5%",
    marginTop: "0.5%",
    backgroundColor: "black",
    color: "#fff",
  },
};
