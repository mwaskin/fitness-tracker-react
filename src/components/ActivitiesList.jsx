import React from "react";
import { useForState } from "../StateContext";

// map activities across options within select element
// when activity is selected, display "count" and "duration" inputs
//

const ActivitiesList = () => {
	const state = useForState();
	const activities = state.activities;

	return (
		<form>
			<label>Activity:</label>
			<select>
				{activities.map((activity) => {
					return <option>{activity.name}</option>;
				})}
			</select>
			<label>Count: </label>
			<input />
			<label>Duration: </label>
			<input />
			<button>Add Another Activity</button>
		</form>
	);
};
