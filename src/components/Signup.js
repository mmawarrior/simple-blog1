// src/components/Signup.js
import React, { useState, useEffect } from 'react';
import './Signup.css';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  // Check localStorage on component mount to determine if the user is already registered
  useEffect(() => {
    const storedUsername = localStorage.getItem('demoUsername');
    setIsRegistered(!!storedUsername);
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the entered credentials in localStorage (for demonstration purposes only)
    localStorage.setItem('demoUsername', username);
    localStorage.setItem('demoPassword', password);

    // Pass the entered credentials to the parent component for pseudo authentication
    onSignup(username, password);

    // Update the registration status
    setIsRegistered(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    // Clear the stored credentials in localStorage
    localStorage.removeItem('demoUsername');
    localStorage.removeItem('demoPassword');

    // Update the registration status
    setIsRegistered(false);
  };

  return (
    <div>
      <h2>Signup</h2>
      {!isRegistered && (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
              className="styled-input"
            />
          </label>
          <br />
          <button type="submit">Signup</button>
        </form>
      )}

      {/* Pseudo-logout button */}
      {isRegistered && (
        <form onSubmit={handleLogout}>
          <button type="submit" className="styled-logout-button">
            Logout
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
