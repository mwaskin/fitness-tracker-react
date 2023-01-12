//React library components
import { Routes, Route } from 'react-router-dom';

//state function imports
import { useEffect, useState } from 'react';
import { useForState, useStateDispatch } from './StateContext';

//component imports
import Home from './components/Home';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Routines from './components/Routines';
import MyRoutines from './components/MyRoutines';
//function imports
import { fetchMe } from './api/auth';
//style imports
import './App.css'
import { fetchPublicRoutines, fetchUserRoutines } from './api/routines';


function App() {
  const state = useForState();
  console.log('App: state: ', state);
  const dispatch = useStateDispatch();
  console.log('App: dispatch: ', dispatch)

  // maybe move useEffects into StateContext
  useEffect(() => {
    const getMe = async () => {
      const userObj = await fetchMe(state.token);
      console.log('App: userObj: ', userObj);
      dispatch({ type: 'setUser', payload: userObj });




      console.log('App: getMe: state: ', state);
    };

    const getMyRoutines = async () =>{
      const myRoutines = await fetchUserRoutines(userObj.username,state.token);
      dispatch({type: 'setMyRoutines', payload: myRoutines});

    }

    if(state.token) {
      getMe(); //why does this not need to be await?
      getMyRoutines();

    }
  }, [state.token]);

  useEffect(() => {
    const getPublicRoutines = async () => {
      const routines = await fetchPublicRoutines();
      dispatch({ type: 'setPublicRoutines', payload: routines })
      console.log('getPublicRoutines: state: ', state);
    };
    getPublicRoutines();
  }, []);

  return (
    <div className='root-container'>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/routines' element={<Routines />} />
        <Route path='/my-routines' element={<MyRoutines/>} />
      </Routes>
    </div>
  )
}

export default App
