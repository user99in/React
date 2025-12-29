import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const nav = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    // Simple front-end validation
    if (!email || !password) {
      setMsg('Please enter email and password')
      return
    }

    // Fake login: you can replace with your real API.
    // Here we treat any credentials as valid for demo.
    try {
      // call a fake endpoint just to simulate network delay
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      // Save a fake token in localStorage to represent logged-in state
      localStorage.setItem('auth_token', 'demo-token')
      setMsg('Login successful')
      nav('/dashboard')
    } catch (err) {
      setMsg('Login failed')
    }
  }

  return (
    <div className="auth-wrap">
      <form className="card" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {msg && <p className="msg">{msg}</p>}
      </form>
    </div>
  )
}