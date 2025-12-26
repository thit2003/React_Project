import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Register from './components/Register.jsx';
import RegisterWithSubmit from './components/RegisterWithSubmit.jsx';

function AppRouter() {
  const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (data) => {
    setSubmittedData(data);
    navigate('/register-display');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<Register onSubmit={handleSubmit} />} />
      <Route
        path="/register-display"
        element={<RegisterWithSubmit data={submittedData} onBack={handleBack} />}
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App
