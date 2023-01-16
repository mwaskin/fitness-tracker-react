import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoutine } from "../api/routines";
import { useForState, useStateDispatch } from "../StateContext";
import "./RoutineForm.css"

const RoutineForm = () => {
	const { token, myRoutines, publicRoutines } = useForState();
	const dispatch = useStateDispatch();
	const [name, setName] = useState("");
	const [goal, setGoal] = useState("");
	const [isPublic, setIsPublic] = useState(false);

	return (
		<form className="routine-form-container routine-form"
			onSubmit={async (event) => {
				event.preventDefault();
				try {
					const data = await createRoutine(token, name, goal, isPublic);
					if (data.error) {
						throw data;
					}
					dispatch({ type: "setMyRoutines", payload: [...myRoutines, data] });
					if (data.isPublic) {
						dispatch({
							type: "setPublicRoutines",
							payload: [...publicRoutines, data],
						});
					}
					useNavigate(`/routines/${data.id}`);
				} catch (error) {
					console.log("Error submitting routine form: ", error);
				}
			}}
		>
			<label className="routine-form-label" >Name: </label>
			<input className="routine-form-input"
				type="text"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<label className="routine-form-label">Goal: </label>
			<input className="routine-form-input"
				type="text"
				value={goal}
				onChange={(event) => setGoal(event.target.value)}
			/>
			<label className="routine-form-label">Make Public?: </label>
			<input className="routine-form-input"
				type="checkbox"
				name="makePublic"
				onChange={() => setIsPublic(!isPublic)}
			/>
			<input className="routine-form-submit"  type="submit" value="Create Routine" />
		</form>

	);
};

export default RoutineForm;
