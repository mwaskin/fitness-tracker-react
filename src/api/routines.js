const APIURL = "http://fitnesstrac-kr.herokuapp.com/api";

export const fetchPublicRoutines = async () => {
  try {
    const response = await fetch(`${APIURL}/routines`, {
      header: {
        'Content-Type': 'application/json',
      }
    });
    const routines = await response.json();
    return routines;
  } catch (error) {
    console.error("Error getting routines: ", error);
  }
}