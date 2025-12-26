import React from 'react';

const RegisterWithSubmit = ({ data, onBack }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Submission Data</h2>
      {data ? (
        <>
          <p>Username: {data.username}</p>
          <p>Firstname: {data.firstname}</p>
          <p>Lastname: {data.lastname}</p>
          <p>Gender: {data.gender}</p>
          <p>Hobbies: {Array.isArray(data.hobbies) ? data.hobbies.join(', ') : ''}</p>
          <p>Role: {data.role}</p>
        </>
      ) : (
        <p>No data submitted.</p>
      )}
      <div style={{ marginTop: '1rem' }}>
        <button onClick={onBack}>Back to Form</button>
      </div>
    </div>
  );
};

export default RegisterWithSubmit;
