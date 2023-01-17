export const getSingleRoutine = (routines, routineId) => {
	return routines.find((routine) => routine.id === routineId);
};
