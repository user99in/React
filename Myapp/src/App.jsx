import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddCategory from './components/AddCategory'
import ShowCategory from './components/Show'

 
function ProtectedRoute({ children }) {
  const token = localStorage.getItem('auth_token')
  if (!token) return <Navigate to="/" replace />
  return children
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-category"
          element={
            <ProtectedRoute>
              <AddCategory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/show-category"
          element={
            <ProtectedRoute>
              <ShowCategory />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}