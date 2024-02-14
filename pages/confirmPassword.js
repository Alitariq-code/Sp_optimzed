import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ChangePasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const validatePasswords = async () => {
    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      if (password.length < 8) {
        setError('Password should be at least 8 characters long');
        return;
      }

      const tokenString = localStorage.getItem('validate');
      const token = parseInt(tokenString, 10); // The second argument is the radix (base), 10 for decimal

      // TODO: Make API call or perform other actions here
      const apiUrl = 'http://178.16.142.39:8000/api/v1/password_reset/confirm/';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          token: token,
          // Add any other required parameters here
        }),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Optionally, you can handle the response here
        const responseData = await response.json();
        router.push('/login');
        console.log('API call successful:', responseData);
      } else {
        // If the response status is not ok, throw an error
        const errorData = await response.json();
        console.error('API call failed:', errorData);
        setError('An error occurred during the API call');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
      setError('An error occurred');
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #3498db',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ecf0f1',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#3498db', marginBottom: '20px' }}>
        Change Password
      </h1>
      <label style={{ marginBottom: '15px', fontSize: '16px' }}>
        New Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </label>
      <label style={{ marginBottom: '15px', fontSize: '16px' }}>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </label>
      <p style={{ color: 'red' }}>{error}</p>
      <button
        type="button"
        onClick={validatePasswords}
        style={{
          backgroundColor: '#3498db',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePasswordPage;
