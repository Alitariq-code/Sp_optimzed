import { useState } from 'react';
import { useRouter } from 'next/router';

const TokenValidation = () => {
  const [token, setToken] = useState('');
  const [validationStatus, setValidationStatus] = useState(null);
  const router = useRouter();

  const handleTokenValidation = async () => {
    try {
      // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint for token validation
      const response = await fetch(
        'http://178.16.142.39:8000/api/v1/password_reset/validate_token/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        }
      );

      if (response.ok) {
        console.log('okay hai');
        setValidationStatus('Token is valid!');
        localStorage.setItem('validate', token);
        router.push('/confirmPassword');
      } else {
        const responseData = await response.json();
        setValidationStatus(`Token validation failed: ${responseData.error}`);
      }
    } catch (error) {
      console.error('Error during token validation:', error.message);
      setValidationStatus('An error occurred during token validation.');
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
        Token Validation
      </h1>
      <label style={{ marginBottom: '15px', display: 'block' }}>
        Enter Token:
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
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
        type="button"
        onClick={handleTokenValidation}
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
        Validate Token
      </button>
      {validationStatus && (
        <div
          style={{
            marginTop: '15px',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            backgroundColor: validationStatus.includes('failed')
              ? '#ffcccc'
              : '#ccffcc',
          }}
        >
          {validationStatus}
        </div>
      )}
    </div>
  );
};

export default TokenValidation;
