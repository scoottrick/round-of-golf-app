import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from './model/routes';
import HomePage from './pages/home-page/HomePage';
import RoundSetupPage from './pages/round-setup-page/RoundSetupPage';
import ScorecardPage from './pages/scorecard-page/ScorecardPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={AppRoutes.home} element={<HomePage />} />
        <Route path={AppRoutes.roundSetup} element={<RoundSetupPage />} />
        <Route
          path={`${AppRoutes.scorecard}/:roundId`}
          element={<ScorecardPage />}
        />
      </Routes>
    </div>
  );
}
export default App;
