import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const UserDetails = ({ user }) => {
  if (!user) {
    return null; // Don't render anything if user is undefined
  }

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
      <h1 style={{ color: '#3498db', marginBottom: '20px' }}>User Details</h1>
      <div style={{ marginBottom: '15px', fontSize: '16px' }}>
        <strong>ID:</strong> {user.id}
      </div>
      <div style={{ marginBottom: '15px', fontSize: '16px' }}>
        <strong>Email:</strong> {user.email}
      </div>
      <div style={{ marginBottom: '15px', fontSize: '16px' }}>
        <strong>First Name:</strong> {user.first_name}
      </div>
      <div style={{ marginBottom: '15px', fontSize: '16px' }}>
        <strong>Last Name:</strong> {user.last_name}
      </div>
      <div style={{ fontSize: '16px' }}>
        <strong>Country:</strong> {user.country}
      </div>
    </div>
  );
};

const App = () => {
  const [userObject, setUserObject] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve the JSON string from localStorage
    let objString = localStorage.getItem('user');

    if (!objString) {
      router.push('/login');
    }
    // Convert the JSON string to a JavaScript object
    let obj = JSON.parse(objString);

    // Update the state with the user object
    setUserObject(obj);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <UserDetails user={userObject} />
    </div>
  );
};

export default App;
