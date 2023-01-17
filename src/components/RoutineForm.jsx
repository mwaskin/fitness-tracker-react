import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
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
					data.activities = [];
					dispatch({ type: "setMyRoutines", payload: [data, ...myRoutines] });
					if (data.isPublic) {
						dispatch({
							type: "setPublicRoutines",
							payload: [data, ...publicRoutines],
						});
					}
				} catch (error) {
					window.alert(error.message);
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
