import React from "react";
import { useForState } from "../StateContext";
import { fetchUserRoutines } from "../api/routines";


const MyRoutines = () =>{
    const state = useForState();
    const userName = state.user.username;
    const myRoutines = state.myRoutines;

    return(
        <div>
          {myRoutines.map(routine => {
                return (
                    <div key={routine.id} className={'routine'}>
                        <h3>{routine.name}</h3>
                        <p>Goal: {routine.goal}</p>
                        <p>Created by: {routine.creatorName}</p>
                        <h4>Activities: </h4>
                        {routine.activities.map(activity => {
                        return (
                            <div key={activity.id}>
                            <p>{activity.name}</p>
                            <p>Description: {activity.description}</p>
                            <p>Duration: {activity.duration}</p>
                            <p>Count: {activity.count}</p>
                            </div>
                            )
                            })}
                        </div>
                        )
                        })}
                    </div>
                )
                    }


export default MyRoutines;
