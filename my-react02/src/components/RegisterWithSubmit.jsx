import React, { useState, useRef } from 'react';

const RegisterWithSubmit = () => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const hobbyRef = useRef([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onHobbiesToggle = (event) => {
    const targetValue = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setFormData((prev) => ({
        ...prev,
        hobbies: prev.hobbies.filter((item) => item !== targetValue),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        hobbies: [...prev.hobbies, targetValue],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example of reading refs, if needed later
    // const checkedHobbies = hobbyRef.current
    //   .filter((el) => el?.checked)
    //   .map((el) => el.value);
    setSubmittedData(formData);
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
  };

  return (
    <div style={{ padding: '1rem' }}>
      {!isSubmitted ? (
        <>
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
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
              {genderOptions.map((gender, index) => (
                <label key={gender.value} style={{ marginRight: '1rem' }}>
                  <input
                    type="radio"
                    name="gender"
                    value={gender.value}
                    checked={formData.gender === gender.value}
                    onChange={handleChange}
                    ref={(el) => {
                      // Example: assign ref if needed
                      // no-op for radios but shows usage
                    }}
                  />
                  {gender.label}
                </label>
              ))}
            </div>
            <div>
              <label>Hobbies:</label>
              {hobbyOptions.map((hobby, index) => (
                <label key={hobby.value} style={{ marginRight: '1rem' }}>
                  <input
                    type="checkbox"
                    id={hobby.value}
                    name="hobbies"
                    value={hobby.value}
                    checked={formData.hobbies.includes(hobby.value)}
                    onChange={onHobbiesToggle}
                    ref={(el) => (hobbyRef.current[index] = el)}
                  />
                  {hobby.label}
                </label>
              ))}
            </div>
            <div>
              <label>Apply Role:</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
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
        </>
      ) : (
        <>
          <h2>Submission Data</h2>
          <p>Username: {submittedData?.username}</p>
          <p>Firstname: {submittedData?.firstname}</p>
          <p>Lastname: {submittedData?.lastname}</p>
          <p>Gender: {submittedData?.gender}</p>
          <p>Hobbies: {submittedData?.hobbies?.join(', ')}</p>
          <p>Role: {submittedData?.role}</p>

          <div style={{ marginTop: '1rem' }}>
            <button onClick={handleBack}>Back to Form</button>
          </div>
        </>
      )}
    </div>
  );
};

export default RegisterWithSubmit;