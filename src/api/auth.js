import { json } from "react-router-dom";
import { useForState, useStateDispatch } from "../StateContext";

const APIURL = "http://fitnesstrac-kr.herokuapp.com/api";

export const fetchMe = async (token) => {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user: ", error);
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    console.log("registerUser response: ", data);
    return data;
  } catch (error) {
    console.log("Error registering user: ", error);
  }
};

export const logIn = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error logging in user: ", error);
  }
};

// export const logOut = () => {
//   const dispatch = useStateDispatch();
//   const state = useForState();
  
//   localStorage.clear();
//   dispatch({type: 'setToken', payload: ''});
//   dispatch({type: 'setUser', payload: {}});
//   console.log(state);
// }