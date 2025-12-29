import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Show() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Demo API – returns array of strings
  const API_URL = 'https://fakestoreapi.com/products/categories'

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((cat, idx) => ({ CategoryId: idx + 1, CategoryName: cat }))
        setCategories(formatted)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <h2 className="center">Loading...</h2>

  return (
    <div className="container">
      <div className="card">
        <div className="row between">
          <h2>All Categories</h2>
          <button className="btn" onClick={() => navigate('/dashboard')}>
            ⬅ Back to Dashboard
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {categories.length ? (
              categories.map((c) => (
                <tr key={c.CategoryId}>
                  <td>{c.CategoryId}</td>
                  <td>{c.CategoryName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>No categories found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}