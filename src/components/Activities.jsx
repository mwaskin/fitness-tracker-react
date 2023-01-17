import React from "react";
import { useForState } from "../StateContext";
import ActivityForm from "./ActivityForm";
import "./Activities.css"
const Activities = () => {
	const state = useForState();
	const activities = state.activities;

	return (
		<div className="activities-container">
			<ActivityForm />

			{activities.map((activity) => {
				return (
					<div key={activity.id} className="activity-box">
						<h3 className="activity-name">{activity.name}</h3>
						<p className="activity-description">Description: {activity.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Activities;
