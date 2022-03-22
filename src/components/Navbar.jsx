import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { signOut } from 'firebase/auth'
import { Auth } from '../Auth/firebase-config'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)

  const handleSubmit = async () => {
    await signOut(Auth)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NEWS REACT_EX
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapseme-2" id="navbarSupportedContent">
            <ul className="navbar-nav me-2  mb-2 mb-lg-0">
              {!currentUser ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/register">
                      Register
                    </Link>
                  </li>{' '}
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <h3>
                      {currentUser ? currentUser.displayName : 'welcome USERS'}
                    </h3>{' '}
                  </li>
                  <li className="nav-item">
                    <Link
                      onClick={() => handleSubmit()}
                      className="nav-link active"
                      to="/register"
                    >
                      Log Out
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
