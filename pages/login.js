import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Logging in with:', { email, password });
    let object = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://178.16.142.39:8000/api/v1/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        const userObject = {
          country: responseData.user.country,
          email: responseData.user.email,
          first_name: responseData.user.first_name,
          id: responseData.user.id,
          last_name: responseData.user.last_name,
        };
        localStorage.setItem('token', responseData.token);
        // Convert the object to a JSON string
        const userString = JSON.stringify(userObject);

        // Store the JSON string in localStorage
        localStorage.setItem('user', userString);
        router.push('/profile');

        // setValidationStatus('Token is valid!');
      } else {
        const responseData = await response.json();
        console.log(responseData);
        // setValidationStatus(`Token validation failed: ${responseData.error}`);
      }
    } catch (error) {}
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
        <i className="fas fa-lock" style={{ marginRight: '10px' }}></i> Login
      </h1>
      <form onSubmit={handleSubmit}>
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
        <label style={{ marginBottom: '15px', display: 'block' }}>
          <i
            className="fas fa-lock"
            style={{ marginRight: '10px', color: '#3498db' }}
          ></i>{' '}
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          Sign In
        </button>
        <div style={{ marginTop: '15px', textAlign: 'right' }}>
          <Link
            href="/forgetPassword"
            passHref
            style={{
              color: '#3498db',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          >
            <i
              className="fas fa-question-circle"
              style={{ marginRight: '5px' }}
            ></i>{' '}
            Forget_Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
