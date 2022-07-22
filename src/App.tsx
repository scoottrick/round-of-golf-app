import { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GolfRoundsProvider } from './data/GolfRoundsContext';
import { GolfRound } from './model/GolfRound';
import { AppRoutes } from './model/routes';
import { getRounds, saveRound } from './data/rounds';
import HomePage from './pages/home-page/HomePage';
import ScorecardPage from './pages/scorecard-page/ScorecardPage';
import { getGolfers, saveGolfer } from './data/golfers';
import { Golfer } from './model/Golfer';
import { useAppTitle } from './hooks/useAppTitle';

function useStoredRounds() {
  const [rounds, setRounds] = useState([] as GolfRound[]);
  const [golfers, setGolfers] = useState([] as Golfer[]);
  const loadedRef = useRef(false);

  async function loadData() {
    const [roundData, golferData] = await Promise.all([
      getRounds(),
      getGolfers(),
    ]);
    setRounds(roundData);
    setGolfers(golferData);
  }

  useEffect(() => {
    if (loadedRef.current) return;
    loadData();
    loadedRef.current = false;
  }, []);

  useEffect(() => {
    rounds.forEach(r => saveRound(r));
  }, [rounds]);

  useEffect(() => {
    golfers.forEach(g => saveGolfer(g));
  }, [golfers]);
  return [rounds, setRounds, golfers, setGolfers] as [
    GolfRound[],
    (rounds: GolfRound[]) => void,
    Golfer[],
    (golfers: Golfer[]) => void
  ];
}

function App() {
  useAppTitle('Round of Golf');
  const [allRounds, setAllRounds, allGolfers, setAllGolfers] =
    useStoredRounds();

  const golfRoundsUpdated = (rounds: GolfRound[]) => {
    setAllRounds(rounds);
  };

  const golfersUpdated = (golfers: Golfer[]) => {
    setAllGolfers(golfers);
  };

  return (
    <GolfRoundsProvider
      rounds={allRounds}
      golfers={allGolfers}
      roundsUpdated={rounds => {
        golfRoundsUpdated(rounds);
      }}
      golfersUpdated={golfersUpdated}
    >
      <Routes>
        <Route path={AppRoutes.home} element={<HomePage />} />
        <Route
          path={`${AppRoutes.scorecard}/:roundId`}
          element={<ScorecardPage />}
        />
      </Routes>
    </GolfRoundsProvider>
  );
}
export default App;
