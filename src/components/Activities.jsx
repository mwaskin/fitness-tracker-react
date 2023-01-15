import React from "react";
import { useForState } from "../StateContext";
import ActivityForm from "./ActivityForm";
// new edit code
// import { editActivity } from "../api/activities";


const Activities = () => {
	const state = useForState();
	const activities = state.activities;
	// // new edit code
	// const handleEdit = async (activityId) => {
	// 	await editActivity(activityId);
	//   }



	return (
		<div>
			      <ActivityForm />

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
