import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getSingleRoutine } from "../../helpers";
import { useForState, useStateDispatch } from "../StateContext";
import { updateRoutine } from "../api/routines";
import SingleActivity from "./SingleActivity";

const SingleRoutine = ({ routine }) => {
	const { myRoutines, publicRoutines } = useForState();
	const dispatch = useStateDispatch();
	const [editMode, setEditMode] = useState(false);
	const [newRoutName, setNewRoutName] = useState(routine.name);
	const [newGoal, setNewGoal] = useState(routine.goal);
	const [isPublic, setIsPublic] = useState(routine.isPublic);
	// const [newActName, setNewActName] = useState(activity.name);
	// const [newDesc, setNewDesc] = useState(activity.description);
	// const [newDur, setNewDur] = useState(activity.duration);
	// const [newCount, setNewCount] = useState(activity.count);
	const updatedRoutine = {
		id: routine.id,
		name: newRoutName,
		goal: newGoal,
		isPublic: isPublic,
	};
	const location = useLocation();

	if (!editMode) {
		return (
			<div key={routine.id} className={"routine"}>
				<h3>{routine.name}</h3>
				<p>Goal: {routine.goal}</p>
				{location.pathname === "/my-routines" ? (
					<>
						<p>Status: {routine.isPublic ? "Public" : "Private"}</p>
						<button
							name="editRoutine"
							type="button"
							onClick={setEditMode(true)}
						>
							Edit Routine
						</button>
					</>
				) : (
					<p>Created by: {routine.creatorName}</p>
				)}
				;<h4>Activities: </h4>
				{routine.activities.map((activity) => {
					return (
						<div key={activity.id}>
							<p>{activity.name}</p>
							<p>Description: {activity.description}</p>
							<p>Duration: {activity.duration}</p>
							<p>Count: {activity.count}</p>
						</div>
					);
				})}
				;
			</div>
		);
	}
	return (
		<>
			<form
				key={routine.id}
				className={"edit-routine"}
				onSubmit={async (event) => {
					event.preventDefault();
					if (
						newRoutName !== routine.name ||
						newGoal !== routine.goal ||
						isPublic !== routine.isPublic
					) {
						try {
							const data = await updateRoutine(updatedRoutine);
							if (data.error) {
								throw data;
							}
							myRoutines.splice(
								myRoutines.findIndex((rout) => rout.id === routine.id),
								1,
								updatedRoutine
							);
							dispatch({ type: "setMyRoutines", payload: myRoutines });

							if (isPublic) {
								publicRoutines.splice(
									publicRoutines.findIndex((rout) => rout.id === routine.id),
									1,
									updatedRoutine
								);
								dispatch({
									type: "setPublicRoutines",
									payload: publicRoutines,
								});
							}
						} catch (error) {
							window.alert(error.message);
							console.log("Error submitting updated routine form: ", error);
						}
					}
				}}
			>
				<label>Name: </label>
				<input
					type="text"
					value={newRoutName}
					placeholder={routine.name}
					onChange={(event) => setNewRoutName(event.target.value)}
				/>
				<label>Goal: </label>
				<input
					type="text"
					value={newGoal}
					placeholder={routine.goal}
					onChange={(event) => setNewGoal(event.target.value)}
				/>
				<label>Make Public?: </label>
				<input
					type="checkbox"
					name="makePublic"
					checked={isPublic}
					onChange={() => setIsPublic(!isPublic)}
				/>
				<input type="submit" value="Save Routine" />
			</form>
			<h4>Activities: </h4>
			{routine.activities.map((activity) => {
				return (
					<div key={activity.id}>
						<SingleActivity activity={activity} />
					</div>
					// <div key={activity.id}>
					// 	<label>Name: </label>
					// 	<input
					// 		type="text"
					// 		value={newActName}
					// 		placeholder={activity.name}
					// 		onChange={(event) => setNewActName(event.target.value)}
					// 	/>
					// 	<label>Description: </label>
					// 	<input
					// 		type="text"
					// 		value={newDesc}
					// 		placeholder={activity.description}
					// 		onChange={(event) => setNewDesc(event.target.value)}
					// 	/>
					// 	<label>Duration: </label>
					// 	<input
					// 		type="text"
					// 		value={newDur}
					// 		placeholder={activity.duration}
					// 		onChange={(event) => setNewDur(event.target.value)}
					// 	/>
					// 	<label>Count: </label>
					// 	<input
					// 		type="text"
					// 		value={newCount}
					// 		placeholder={activity.count}
					// 		onChange={(event) => setNewCount(event.target.value)}
					// 	/>
					// </div>
				);
			})}
			;
		</>
	);
};

export default SingleRoutine;
