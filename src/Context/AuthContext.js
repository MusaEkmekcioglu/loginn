import { createContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { Auth } from '../Auth/firebase-config'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [currentUser, setcurrentUser] = useState()

  useEffect(() => {
    onAuthStateChanged(Auth, (currentUser) => setcurrentUser(currentUser))
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
