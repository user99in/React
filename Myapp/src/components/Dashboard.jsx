import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('auth_token')
    navigate('/')
  }

  return (
    <div className="container">
      <header className="topbar">
        <h1>Admin Dashboard</h1>
        <button className="btn danger" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main>
        <p>Welcome to the dashboard. Use the buttons below.</p>

        <div className="actions">
          <button className="btn" onClick={() => navigate('/add-category')}>
            Add Category
          </button>

          <button className="btn" onClick={() => navigate('/show-category')}>
            Show Categories
          </button>
        </div>
      </main>
    </div>
  )
}