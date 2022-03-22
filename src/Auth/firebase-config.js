import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA8UPWcnHjMfUUa4BM7talsJNvz6V2kAbw',
  authDomain: 'exercise-1-c4677.firebaseapp.com',
  projectId: 'exercise-1-c4677',
  storageBucket: 'exercise-1-c4677.appspot.com',
  messagingSenderId: '1011895390723',
  appId: '1:1011895390723:web:0356a51d887d9c23adf436',
  measurementId: 'G-0C5PT8Q366',
  //...
}

const app = initializeApp(firebaseConfig)

export const Auth = getAuth(app)
