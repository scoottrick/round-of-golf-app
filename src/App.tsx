import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/home-page/HomePage';
import RoundScoresPage from './pages/round-scores-page/RoundScoresPage';
import RoundSetupPage from './pages/round-setup-page/RoundSetupPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="round-setup" element={<RoundSetupPage />} />
        <Route path="round/:roundId" element={<RoundScoresPage />} />
      </Routes>
    </div>
  );
}
export default App;
