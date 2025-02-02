import axios from "axios";

//1. Get Users
export const getUser = async () => {
  console.log("Real Get");
  return await axios.get("http://localhost:3000/api/users");
};

//2. Post User
export const saveUser = async (fName, lName, email) => {
  console.log("Real Post - Save");
  try {
    await axios.post("http://localhost:3000/api/users", {
      fName: fName,
      lName: lName,
      email: email,
    });

    // Fetch updated users after the post request
    const response = await getUser();
    return response; // Return the result as array of users
  } catch (error) {
    console.error("Error saving user:", error);
    throw error;
  }
};
