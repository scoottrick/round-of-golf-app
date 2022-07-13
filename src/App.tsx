import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GolfRoundsProvider } from './data/GolfRoundsContext';
import { GolfRound } from './model/golf';
import { AppRoutes } from './model/routes';
import { loadRounds, saveRound } from './model/storage';
import HomePage from './pages/home-page/HomePage';
import RoundSetupPage from './pages/round-setup-page/RoundSetupPage';
import ScorecardPage from './pages/scorecard-page/ScorecardPage';

function useStoredRounds() {
  const [rounds, setRounds] = useState(() => loadRounds());
  useEffect(() => {
    rounds.forEach(r => saveRound(r));
  }, [rounds]);
  return [rounds, setRounds] as [GolfRound[], (_: GolfRound[]) => void];
}

function App() {
  const [allRounds, setAllRounds] = useStoredRounds();

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
