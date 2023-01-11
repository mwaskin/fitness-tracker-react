import React, {useState } from "react";
import { useStateDispatch } from "../StateContext";
import { logIn } from "../api/auth";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useStateDispatch();

    return (
        <div>
            <form
             onSubmit = {async (event) => {
                event.preventDefault();
                try {
                const data = await logIn(username,password);
                if (data.error){

                throw (data)
        }
        dispatch({type: 'setToken', payload: data.token});

                } catch (error) {
        window.alert(error.message);
        console.error('Login: Error logging in: ', error)

    }



             }}
            >



            <label htmlFor='username'>Username: </label>
            <input type='text' value={username} placeholder="Username" onChange={(event) =>  setUsername(event.target.value)}/>

            <label htmlFor='password'>Password: </label>
            <input type='text' value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
            <input type="submit" value="Log In" />

</form>
        </div>
    )



}





export default Login;
