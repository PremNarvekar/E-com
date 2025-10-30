import axios from "../../api/axios";

export const asyncregisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log("User registered:", res.data);
  } catch (error) {
    console.log("Error registering user:", error.message);
  }
};
export const asyncsigninUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/users?email=${user.email} &password=${user.password}`);
    console.log("User Sign In:", res.data);

    localStorage.setItem("user" , JSON.stringify(res.data))
  } catch (error) {
    console.log("Error signing in user:", error.message);
  }
};

export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user" , "");
  } catch (error) {
    console.log("Error signing out user:", error.message);
  }
};

export const asynccurrentUser = (user) => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("Current User:", user);
    } else {
      console.log("No user is currently logged in.");
    }
  } catch (error) {
    console.log("Error signing out user:", error.message);
  }
};
