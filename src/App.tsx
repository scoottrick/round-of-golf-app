import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GolfRoundsProvider } from './data/GolfRoundsContext';
import { GolfRound, GolfUtils } from './model/golf';
import { AppRoutes } from './model/routes';
import HomePage from './pages/home-page/HomePage';
import RoundSetupPage from './pages/round-setup-page/RoundSetupPage';
import ScorecardPage from './pages/scorecard-page/ScorecardPage';

function App() {
  const [allRounds, setAllRounds] = useState([GolfUtils.createMockRound()]);

  const golfRoundsUpdated = (rounds: GolfRound[]) => {
    console.log('-- rounds updated', rounds);
    setAllRounds(rounds);
  };

  return (
    <div className="App">
      <GolfRoundsProvider
        rounds={allRounds}
        roundsUpdated={rounds => {
          golfRoundsUpdated(rounds);
        }}
      >
        <Routes>
          <Route path={AppRoutes.home} element={<HomePage />} />
          <Route path={AppRoutes.roundSetup} element={<RoundSetupPage />} />
          <Route
            path={`${AppRoutes.scorecard}/:roundId`}
            element={<ScorecardPage />}
          />
        </Routes>
      </GolfRoundsProvider>
    </div>
  );
}
export default App;
