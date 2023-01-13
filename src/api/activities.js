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
