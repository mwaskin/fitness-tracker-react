const APIURL = "http://fitnesstrac-kr.herokuapp.com/api";

export const fetchPublicRoutines = async () => {
  try {
    const response = await fetch(`${APIURL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const routines = await response.json();
    return routines;
  } catch (error) {
    console.error("Error getting routines: ", error);
  }
};

export const fetchUserRoutines = async (username, token) => {
  try {
    const response = await fetch(`${APIURL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error getting user Routines: ", error);
  }
};
