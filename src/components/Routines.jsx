import React from "react";
// import { fetchRoutines } from "../api/routines";
import { useForState } from "../StateContext";
import SingleRoutine from "./SingleRoutine";

const Routines = () => {
	const state = useForState();
	const routines = state.publicRoutines;
	return (
		<div>
			{routines.map((routine) => {
				return (
					<div key={routine.id} className={"routine"}>
						<SingleRoutine routine={routine} />
					</div>
				);
			})}
		</div>
	);
};

export default Routines;
