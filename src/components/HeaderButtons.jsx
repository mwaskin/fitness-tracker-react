import React from "react";
import { NavLink } from "react-router-dom";
// import { logOut } from "../api/auth";
import { useForState, useStateDispatch } from "../StateContext";

const HeaderButtons = () => {
  
  const dispatch = useStateDispatch();
  const state = useForState();
  
  return(
    <nav>
      <NavLink to='/' className={'nav-home'}>Home</NavLink>
      <NavLink to='/routines' className={'nav-routines'}>Routines</NavLink>
      <NavLink to='/activities' className={'nav-activities'}>Activities</NavLink>
      {state.token ? (
        <div>
          <NavLink to='/my-routines' className={'nav-myroutines'}>My Routines</NavLink>
          <NavLink to='/' onClick={() => {
            localStorage.clear();
            dispatch({type: 'setToken', payload: ''});
            dispatch({type: 'setUser', payload: {}});
            console.log(state);
          }}>Sign Out</NavLink>
        </div>
      ) : (
        <div>
          <NavLink to='/login'>Sign In</NavLink>
          <NavLink to='/register'>Register</NavLink>
        </div>
      )}
    </nav>
  )
}

export default HeaderButtons;