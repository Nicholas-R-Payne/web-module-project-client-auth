import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [cred, setCred] = useState({
        username: '',
        password: ''
    })

    const handleChange = (evt) => {
        setCred({
            ...cred,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('http://localhost:9000/api/login', cred)
            .then(res => {
                localStorage.setItem('token', res.payload)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return(<div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input onChange={handleChange} name='username' id='username' />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input onChange={handleChange} name='password' type='password' id='password' />
        </div>
        <button>Submit</button>
      </form>
    </div>)
  }

export default Login