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

export const fetchUserRoutines = async (username, token = null) => {
	try {
		const response = await fetch(`${APIURL}/users/${username}/routines`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		const routines = await response.json();
		return routines;
	} catch (error) {
		console.error("Error getting user Routines: ", error);
	}
};

export const createRoutine = async (token, name, goal, isPublic) => {
	try {
		const response = await fetch(`${APIURL}/routines`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: name,
				goal: goal,
				isPublic: isPublic,
			}),
		});
		const routine = await response.json();
		return routine;
	} catch (error) {
		console.error("Error creating routine: ", error);
	}
};

export const updateRoutine = async ({ id, name, goal, isPublic }) => {
	try {
		const response = await fetch(`${APIURL}/routines/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				name: name,
				goal: goal,
				isPublic: isPublic,
			}),
		});
		const routine = await response.json();
		return routine;
	} catch (error) {
		console.error("Error updating routine: ", error);
	}
};
