import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GolfRound } from './model/golf';
import { AppRoutes } from './model/routes';
import HomePage from './pages/home-page/HomePage';
import RoundSetupPage from './pages/round-setup-page/RoundSetupPage';
import ScorecardPage from './pages/scorecard-page/ScorecardPage';

const initialRounds: GolfRound[] = [];

function App() {
  const [allRounds, setAllRounds] = useState(initialRounds);
  const goTo = useNavigate();

  const onRoundCreated = (round: GolfRound, stopNav = false) => {
    setAllRounds([round, ...allRounds]);
    stopNav || goTo(`${AppRoutes.scorecard}/${round.id}`);
  };

  return (
    <div className="App">
      <Routes>
        <Route path={AppRoutes.home} element={<HomePage />} />
        <Route
          path={AppRoutes.roundSetup}
          element={
            <RoundSetupPage
              setupCompleted={newRound => onRoundCreated(newRound)}
            />
          }
        />
        <Route
          path={`${AppRoutes.scorecard}/:roundId`}
          element={<ScorecardPage />}
        />
      </Routes>
    </div>
  );
}
export default App;
