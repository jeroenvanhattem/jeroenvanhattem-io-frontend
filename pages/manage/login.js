import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from '../../styles/Login.module.css'


const LoginPage = () => {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const backendURL = process.env.BACKEND_URL

  const submitHandler = async (event) => {
    event.preventDefault()

    // Fetch to the login route with login data
    try {
      const response = await fetch(backendURL + '/users/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      const responseData = await response.json()
      console.log(responseData)


      // If registration was successful
      if (responseData.token) {
        // Put the returned token in the local storage
        localStorage.setItem('token', responseData.token)
        
        // Redirect to the add project page
        router.push('/manage/add-project')
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.login}>

      {/* Login form */}
      <div className={styles.form}>
        <div className={styles.header}>
          <h1>Login</h1>
        </div>

        <form onSubmit={submitHandler}>
          <label>Email</label>
          <div className={styles.input}>
            <input placeholder='Email' onChange={(event) => setEmail(event.target.value)} />
          </div>
          <label>Password</label>
          <div className={styles.input}>
            <input type='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
          </div>
            <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage