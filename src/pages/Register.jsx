import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { Auth } from '../Auth/firebase-config'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = async () => {
    await createUserWithEmailAndPassword(Auth, email, password)

    await updateProfile(Auth.currentUser, { displayName: username })
    navigate('/login')
  }

  return (
    <div>
      {' '}
      <div className="container mt-5">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label for="floatingInput">User Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="d-flex mt-4 align-items-center justify-content-center">
          <button
            onClick={() => handleSubmit()}
            type="button"
            className="btn btn-primary mx-2"
          >
            sign up
          </button>
          {/* 
          <Link type="button" className="btn btn-primary" to="/register">
            Register
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Register
