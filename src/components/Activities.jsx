import React from "react";
import { useForState } from "../StateContext";

const Activities = () => {
	const state = useForState();
	const activities = state.activities;

	return (
		<div>
			{activities.map((activity) => {
				return (
					<div key={activity.id} className={"activity"}>
						<h3>{activity.name}</h3>
						<p>Description: {activity.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Activities;
