import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Auth } from '../Auth/firebase-config'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
  // const { currentUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = () => {
    let user = signInWithEmailAndPassword(Auth, email, password)

    console.log(user)
    navigate('/')
  }

  return (
    <div className="container mt-5">
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
          Login
        </button>

        <Link type="button" className="btn btn-primary" to="/register">
          Register
        </Link>
      </div>
    </div>
  )
}

export default Login
