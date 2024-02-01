import { useState } from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoalsPage from './pages/GoalsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/goals' element={<GoalsPage />} />
        <Route path='/goals/:id' element={<GoalsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
