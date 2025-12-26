import React, { useState } from 'react';

const Register = ({ onSubmit }) => {
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
  ];

  const hobbyOptions = [
    { label: 'Music', value: 'music' },
    { label: 'Movies', value: 'movies' },
    { label: 'Plastic Model', value: 'plastic_model' },
  ];

  const roleOptions = [
    { label: 'General staff', value: 'general_staff' },
    { label: 'Developer', value: 'developer' },
    { label: 'System Analyst', value: 'system_analyst' },
  ];

  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    gender: '',
    hobbies: [],
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHobbiesToggle = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const hobbies = checked
        ? [...prev.hobbies, value]
        : prev.hobbies.filter((hobby) => hobby !== value);
      return { ...prev, hobbies };
    });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(formData);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmitClick}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Firstname:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Lastname:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          {genderOptions.map((gender) => (
            <label key={gender.value} style={{ marginRight: '1rem' }}>
              <input
                type="radio"
                name="gender"
                value={gender.value}
                checked={formData.gender === gender.value}
                onChange={handleChange}
              />
              {gender.label}
            </label>
          ))}
        </div>
        <div>
          <label>Hobbies:</label>
          {hobbyOptions.map((hobby) => (
            <label key={hobby.value} style={{ marginRight: '1rem' }}>
              <input
                type="checkbox"
                value={hobby.value}
                checked={formData.hobbies.includes(hobby.value)}
                onChange={handleHobbiesToggle}
              />
              {hobby.label}
            </label>
          ))}
        </div>
        <div>
          <label>Apply Role:</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select a role</option>
            {roleOptions.map((role) => (
              <option key={role.value} value={role.value}>
                {role.label}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div style={{ marginTop: '1rem' }}>
        <h3>Current Input:</h3>
        <p>Username: {formData.username}</p>
        <p>Firstname: {formData.firstname}</p>
        <p>Lastname: {formData.lastname}</p>
        <p>Gender: {formData.gender}</p>
        <p>Hobbies: {formData.hobbies.join(', ')}</p>
        <p>Role: {formData.role}</p>
      </div>
    </div>
  );
};

export default Register;
