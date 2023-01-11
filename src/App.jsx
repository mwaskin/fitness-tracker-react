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
//function imports
import { fetchMe } from './api/auth';
//style imports
import './App.css'

function App() {
  const state = useForState();
  console.log('App: state: ', state);
  const dispatch = useStateDispatch();
  console.log('App: dispatch: ', dispatch)

  useEffect(() => {
    const getMe = async () => {
      const userObj = await fetchMe(state.token);
      console.log('App: userObj: ', userObj);
      dispatch({ type: 'setUser', payload: userObj });
      console.log('App: getMe: state: ', state);
    };

    if(state.token) {
      getMe();
    }
  }, [state.token]);

  return (
    <div className='root-container'>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/users/register' element={<Register />} />
        <Route path='/users/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
