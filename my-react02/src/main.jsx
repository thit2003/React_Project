import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Register from './components/Register.jsx';
import RegisterWithSubmit from './components/RegisterWithSubmit.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/classwork_DI">
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register-display" element={<RegisterWithSubmit />} />
    </Routes>
  </BrowserRouter>
);
