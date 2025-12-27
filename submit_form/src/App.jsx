import React, { useState } from 'react';
import './App.css';
import Register from './components/Register.jsx';
import RegisterWithSubmit from './components/RegisterWithSubmit.jsx';

function App() {
  const [submittedData, setSubmittedData] = useState(null);
  const [showDisplay, setShowDisplay] = useState(false);

  const handleSubmit = (data) => {
    setSubmittedData(data);
    setShowDisplay(true);
  };

  const handleBack = () => {
    setShowDisplay(false);
  };

  return (
    <>
      {showDisplay ? (
        <RegisterWithSubmit data={submittedData} onBack={handleBack} />
      ) : (
        <Register onSubmit={handleSubmit} />
      )}
    </>
  );
}

export default App;
