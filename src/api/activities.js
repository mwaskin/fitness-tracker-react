const APIURL = "http://fitnesstrac-kr.herokuapp.com/api";

export const fetchAllActivities = async () => {
  try {
    const response = await fetch(`${APIURL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const activities = await response.json();
    return activities;
  } catch (error) {
    console.error("Error getting activities: ", error);
  }
};

export const createActivity = async (token, name, description) => {
  try {
    const response = await fetch(`${APIURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const activity = await response.json();
    return activity;
  } catch (error) {
    console.error("Error creating activity: ", error);
  }
};

// // NEW CODE

// export const editActivity = async (token, id, name, description) => {
//   try {
//     const response = await fetch(`${APIURL}/activities/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         name,
//         description,
//       }),
//     });
//     const activity = await response.json();
//     return activity;
//   } catch (error) {
//     console.error("Error editing activity: ", error);
//   }
// };
