import { useState } from 'react';
import { useRouter } from 'next/router';
const ForgetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      // Add your password reset logic here
      console.log('Resetting password for email:', email);

      // Assuming apiUrl is the endpoint for the password reset API
      const apiUrl = 'http://178.16.142.39:8000/api/v1/password_reset/';

      // Make an API call to send the user email to the backend
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Sending user email in the request body
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        // Optionally, you can handle the response here
        const responseData = await response.json();
        router.push('/validateToken');
        console.log('Password reset successful:', responseData);
      } else {
        // If the response status is not ok, throw an error
        const errorData = await response.json();
        console.error('Password reset failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h1 style={{ color: '#3498db', textAlign: 'center' }}>
        <i className="fas fa-key" style={{ marginRight: '10px' }}></i> Forget
        Password
      </h1>
      <form onSubmit={handleResetPassword}>
        <label style={{ marginBottom: '15px', display: 'block' }}>
          <i
            className="fas fa-envelope"
            style={{ marginRight: '10px', color: '#3498db' }}
          ></i>{' '}
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              boxSizing: 'border-box',
              borderRadius: '5px',
              border: '1px solid #ddd',
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
