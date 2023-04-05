import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login({setToken}) {
    const [phonenumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            phonenumber,
            password
        });
        setToken(token);
    }
  return (
    <div className='flex flex-col items-center'>
        <h1 className='p-4'>Enter Your Info</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Phone Number</p>
                <input type='tel' onChange={e => setPhoneNumber(e.target.value)} className='my-4 shadow appearance-none border
                rounded'/> 
            </label>
            <label>
                <p>Password</p>
                <input type='password' onChange={e => setPassword(e.target.value)} className='my-4 shadow appearance-none border
                rounded'/> 
            </label>
            <div>
                <button type='submit' className='bg-purple-300 text-white font-b
                rounded my-4 p-2 w-full'>Submit</button>
            </div>

        </form>    
    </div>
  )
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;