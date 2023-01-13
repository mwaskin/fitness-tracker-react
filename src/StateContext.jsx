import React from "react";
import { createContext, useContext, useReducer } from "react";

const StateContext = createContext(null);
const StateDispatchContext = createContext(null);

const savedToken = localStorage.getItem("token");

const initToken = savedToken ? savedToken : "";

export function StateProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, {
		token: initToken,
		user: {},
		publicRoutines: [],
		myRoutines: [],
		activities: [],
	});

	return (
		<StateContext.Provider value={state}>
			<StateDispatchContext.Provider value={dispatch}>
				{children}
			</StateDispatchContext.Provider>
		</StateContext.Provider>
	);
}

export function useForState() {
	return useContext(StateContext);
}

export function useStateDispatch() {
	return useContext(StateDispatchContext);
}

function reducer(state, action) {
	switch (action.type) {
		case "setToken": {
			return { ...state, token: action.payload };
		}
		case "setUser": {
			return { ...state, user: action.payload };
		}
		case "setPublicRoutines": {
			return { ...state, publicRoutines: action.payload };
		}
		case "setMyRoutines": {
			return { ...state, myRoutines: action.payload };
		}
		case "setActivities": {
			return { ...state, activities: action.payload };
		}
		default: {
			return state;
		}
	}
}
