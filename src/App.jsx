//React library components
import { Routes, Route } from "react-router-dom";

//state function imports
import { useEffect, useState } from "react";
import { useForState, useStateDispatch } from "./StateContext";

//component imports
import Home from "./components/Home";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Routines from "./components/Routines";
import MyRoutines from "./components/MyRoutines";
import Activities from "./components/Activities";
//function imports
import { fetchMe } from "./api/auth";
//style imports
import "./App.css";
import { fetchPublicRoutines, fetchUserRoutines } from "./api/routines";
import { fetchAllActivities } from "./api/activities";

function App() {
	const state = useForState();
	console.log("App: state: ", state);
	const dispatch = useStateDispatch();
	console.log("App: dispatch: ", dispatch);

	// maybe move useEffects into StateContext
	useEffect(() => {
		const getMyRoutines = async (userObj) => {
			const username = userObj.username;
			console.log("USERNAME------------------->", userObj.username);
			const token = state.token;
			console.log("TOKEN----------------->", token);
			const myRoutines = await fetchUserRoutines(username, token);
			dispatch({ type: "setMyRoutines", payload: myRoutines });
		};
		const getMe = async () => {
			const userObj = await fetchMe(state.token);
			console.log("App: userObj: ", userObj);
			dispatch({ type: "setUser", payload: userObj });
			await getMyRoutines(userObj);
			console.log("App: getMe: state: ", state);
		};

		if (state.token) {
			getMe();
		}
	}, [state.token]);

	useEffect(() => {
		const getPublicRoutines = async () => {
			const routines = await fetchPublicRoutines();
			dispatch({ type: "setPublicRoutines", payload: routines });
			console.log("getPublicRoutines: state: ", state);
		};

		const getAllActivities = async () => {
			const activities = await fetchAllActivities();
			dispatch({ type: "setActivities", payload: activities });
		};

		getPublicRoutines();
		getAllActivities();
	}, []);

	return (
		<div className="root-container">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/routines" element={<Routines />} />
				<Route path="/my-routines" element={<MyRoutines />} />
				<Route path="/activities" element={<Activities />} />
			</Routes>
		</div>
	);
}

export default App;
