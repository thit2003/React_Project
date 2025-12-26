import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Register from './components/Register.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/classwork_DI">
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
