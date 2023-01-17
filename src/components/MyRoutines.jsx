import React from "react";
import { useForState } from "../StateContext";
import { fetchUserRoutines } from "../api/routines";
import RoutineForm from "./RoutineForm";
import SingleRoutine from "./SingleRoutine";

const MyRoutines = () => {
	const state = useForState();
	const userName = state.user.username;
	const myRoutines = state.myRoutines;

	return (
		<div>
			<RoutineForm />
			{myRoutines.map((routine) => {
				return (
					<div key={routine.id} className={"routine"}>
						<SingleRoutine routine={routine} />
					</div>
				);
			})}
		</div>
	);
};

export default MyRoutines;
