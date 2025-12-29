import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    FullName: "",
    EmailId: "",
    Password: "",
    ConfirmPassword: "",
    PhoneNumber: ""
  });

  const [message, setMessage] = useState("");
  const [savedUser, setSavedUser] = useState(null);

  // Load saved data on page load
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data) setSavedUser(data);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !user.FullName ||
      !user.EmailId ||
      !user.Password ||
      !user.ConfirmPassword ||
      !user.PhoneNumber
    ) {
      setMessage("All fields are required!");
      return;
    }

    if (user.Password !== user.ConfirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // Save to localStorage
    localStorage.setItem("userData", JSON.stringify(user));
    setSavedUser(user);
    setMessage("User Registered Successfully!");
  };

  // Delete saved data
  const handleDelete = () => {
    localStorage.removeItem("userData");
    setSavedUser(null);
    setMessage("User data deleted.");
  };

  return (
    <div className="container">

      {/* FORM */}
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          name="FullName"
          placeholder="Full Name"
          value={user.FullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="EmailId"
          placeholder="Email"
          value={user.EmailId}
          onChange={handleChange}
        />

        <input
          type="password"
          name="Password"
          placeholder="Password"
          value={user.Password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          value={user.ConfirmPassword}
          onChange={handleChange}
        />

        <input
          type="text"
          name="PhoneNumber"
          placeholder="Phone Number"
          value={user.PhoneNumber}
          onChange={handleChange}
        />

        <button type="submit">Register</button>

        {message && <p className="result">{message}</p>}
      </form>

      {/* DISPLAY SAVED DATA */}
      <div className="data-section">
        <h2>Saved User Data</h2>

        {savedUser ? (
          <div>
            <strong>Full Name:</strong> {savedUser.FullName} <br />
            <strong>Email:</strong> {savedUser.EmailId} <br />
            <strong>Password:</strong> {savedUser.Password} <br />
            <strong>Confirm Password:</strong> {savedUser.ConfirmPassword} <br />
            <strong>Phone Number:</strong> {savedUser.PhoneNumber}
            <div style={{ marginTop: 12 }}>
              <button className="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}

export default App;
