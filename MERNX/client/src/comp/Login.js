import React, { useState } from 'react'
import axios from 'axios'

export const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const handleUserChange=(e)=>{
        setUsername(e.target.value)
    }
    const handlePassChange=(e)=>{
        setPassword(e.target.value)
    }

    const collectData=async()=>{
        try {
            let logindata=await axios.post('http://localhost:5000/login/login',{
                username,password
            })
            logindata=(logindata).data;
            alert(logindata.name)
            if(logindata.name){
                localStorage.setItem("login",JSON.stringify(logindata))
            }else{
                alert("Login Failed")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className='App'>
                <header className='App-header'>
                    <h4>Login Here</h4>
                    <label>Username :</label>
                    <input type='text' name='username' value={username} required onChange={(e) => handleUserChange(e)} />
                    <br />
                    <label>Password :</label>
                    <input type='text' name='password' value={password} required onChange={(e) => handlePassChange(e)} />
               <br/>
            <button type="button"  onClick={collectData}>Submit</button>

                </header>
            </div>
        </div>
    )
}
export default Login