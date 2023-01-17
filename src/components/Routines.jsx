import React from "react";
import { useForState } from "../StateContext";
import SingleRoutine from "./SingleRoutine";
import "./Routines.css";

const Routines = () => {
	const state = useForState();
	const routines = state.publicRoutines;
	return (
		<div className="routines-container">
			{routines.map((routine) => {
				return (
					<div key={routine.id} className="routine-card">
						<h3 className="routine-name">{routine.name}</h3>
						<p className="routine-goal">Goal: {routine.goal}</p>
						<p className="routine-creator">Created by: {routine.creatorName}</p>
						<h4 className="routine-activities-header">Activities: </h4>
						{routine.activities.map((activity) => {
							return (
								<div key={activity.id} className="activity-card">
									<p className="activity-name">{activity.name}</p>
									<p className="activity-description">
										Description: {activity.description}
									</p>
									<p className="activity-duration">
										Duration: {activity.duration}
									</p>
									<p className="activity-count">Count: {activity.count}</p>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Routines;
