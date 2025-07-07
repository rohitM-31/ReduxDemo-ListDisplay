import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <h2>All Saved Users</h2>
      {users.length === 0 ? (
        <p>No users saved yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email} <br />
              <strong>Phone:</strong> {user.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Display;
