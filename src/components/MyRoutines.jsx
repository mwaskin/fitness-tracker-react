import React from "react";
import { useForState } from "../StateContext";
import { fetchUserRoutines } from "../api/routines";
import RoutineForm from "./RoutineForm";
import "./MyRoutines.css"

const MyRoutines = () => {
	const state = useForState();
	const userName = state.user.username;
	const myRoutines = state.myRoutines;

	return (
		<div className="my-routines-container">
			<RoutineForm />
			{myRoutines.map((routine) => {
				return (
					<div key={routine.id} className="my-routine">
						<h3 className="my-routine-name">{routine.name}</h3>
						<p className="my-routine-goal">Goal: {routine.goal}</p>
						<p className="my-routine-creator">Created by: {routine.creatorName}</p>
						<h4 className="my-routine-activities-header">Activities: </h4>
						{routine.activities.map((activity) => {
							return (
								<div key={activity.id} className="my-routine-activity">
									<p className="my-routine-activity-name">{activity.name}</p>
									<p className="my-routine-activity-description">Description: {activity.description}</p>
									<p className="my-routine-activity-duration">Duration: {activity.duration}</p>
									<p className="my-routine-activity-count">Count: {activity.count}</p>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);

};

export default MyRoutines;
