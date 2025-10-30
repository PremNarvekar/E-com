import axios from "../../api/axios";

export const asyncregisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log("User registered:", res.data);
  } catch (error) {
    console.log("Error registering user:", error.message);
  }
};
