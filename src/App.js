import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FitnessApp from './components/Home.jsx'; // ایمپورت کامپوننت جدید
import './App.css';

function App() {
  return (
    <Router>
      <FitnessApp />
    </Router>
  );
}

export default App;
