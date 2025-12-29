import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddCategory() {
  const [categoryName, setCategoryName] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!categoryName) {
      setMessage('Please enter a category name')
      return
    }

    const data = {
      CategoryId: 0,
      CategoryName: categoryName,
      Createddate: new Date().toISOString(),
    }

    try {
      // Using jsonplaceholder for demo (no CORS problems)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Failed')

      const result = await res.json()
      console.log('Added:', result)
      setMessage('Category added successfully!')
      setCategoryName('')
    } catch (err) {
      console.error(err)
      setMessage('Something went wrong')
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Add Category</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />

          <div className="row">
            <button type="submit" className="btn">
              Add Category
            </button>

            <button type="button" className="btn secondary" onClick={() => navigate('/dashboard')}>
              Back to Dashboard
            </button>
          </div>
        </form>

        {message && <p className="msg">{message}</p>}
      </div>
    </div>
  )
}