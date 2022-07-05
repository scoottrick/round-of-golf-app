import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import RoundSetupPage from './pages/round-setup-page/RoundSetupPage';
import ScorecardPage from './pages/scorecard-page/ScorecardPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="round-setup" element={<RoundSetupPage />} />
        <Route path="scorecard/:roundId" element={<ScorecardPage />} />
      </Routes>
    </div>
  );
}
export default App;
