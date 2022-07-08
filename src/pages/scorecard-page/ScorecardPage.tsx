import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageLayout,
  PageContent,
  ControlPanel,
  RectButton,
} from '../../components';
import { useCurrentRound } from '../../data/GolfRoundsContext';
import { GolfUtils } from '../../model/golf';
import { AppRoutes } from '../../model/routes';
import { classNames } from '../../model/utils';

const CardDataCell = ({ heading, shaded, children }) => {
  return (
    <span
      className={classNames([
        'text-center flex justify-center items-center max-h-20',
        [heading, 'border-b-2 py-4 px-4', 'border-b py-2 px-2 flex-1'],
        [shaded, 'bg-gray-200'],
      ])}
    >
      {children}
    </span>
  );
};

const CardDataList = ({ grows, children }) => {
  return (
    <div
      className={classNames([
        'flex flex-col border-r min-h-full last:border-r-0',
        [grows, 'flex-1'],
      ])}
    >
      {children}
    </div>
  );
};

const HoleColumn = ({ holes }) => {
  return (
    <CardDataList grows={false}>
      <CardDataCell shaded={false} heading={true}>
        Hole #
      </CardDataCell>
      {holes.map((h, i) => (
        <CardDataCell key={i} shaded={i % 2 !== 0} heading={false}>
          {i + 1}
        </CardDataCell>
      ))}
    </CardDataList>
  );
};

const ScoreColumn = ({ golfer, scoreUpdated }) => {
  const scoreInputFocused = (inputElement: HTMLInputElement) => {
    inputElement.setSelectionRange(0, inputElement.value.length);
  };
  const scoreChanged = (holeIndex: string, inputValue: string) => {
    const score = parseInt(inputValue);
    if (score && !isNaN(score)) {
      scoreUpdated(holeIndex, score);
    }
  };

  return (
    <CardDataList grows={true}>
      <CardDataCell heading={true} shaded={false}>
        {golfer.name}
      </CardDataCell>
      {golfer.scores.map((s, i) => (
        <CardDataCell key={i} shaded={i % 2 !== 0} heading={false}>
          <input
            className="bg-transparent text-center w-full h-full"
            type="text"
            inputMode="numeric"
            size={2}
            value={s || '--'}
            onChange={e => scoreChanged(i, e.target.value)}
            onFocus={e => scoreInputFocused(e.target)}
          />
        </CardDataCell>
      ))}
    </CardDataList>
  );
};

const Card = ({ holes, golfers, scoreUpdated }) => {
  return (
    <div className="scorecard flex flex-row justify-between min-h-full">
      <HoleColumn holes={holes} />
      {golfers.map((g, i) => (
        <ScoreColumn
          key={i}
          golfer={g}
          scoreUpdated={(holeIndex, score) => scoreUpdated(holeIndex, i, score)}
        />
      ))}
    </div>
  );
};

const RoundNotFound: FC = () => {
  const goTo = useNavigate();
  useEffect(() => goTo(AppRoutes.home), []);
  return <></>;
};

const ScorecardPage = () => {
  const [golfRound, setGolfRound] = useCurrentRound();

  if (!golfRound) {
    return <RoundNotFound />;
  }

  const golferScoreUpdated = (
    holeIndex: number,
    golferIndex: number,
    score: number
  ) => {
    const golfers = [...golfRound.golfers];
    const golfer = golfers[golferIndex];
    golfer.scores.splice(holeIndex, 1, score);
    setGolfRound({ ...golfRound, golfers: golfers });
  };

  return (
    <PageLayout>
      <PageContent className="py-0 px-0">
        <Card
          holes={golfRound.course.holes}
          golfers={golfRound.golfers}
          scoreUpdated={(holeIndex, golferIndex, score) => {
            golferScoreUpdated(holeIndex, golferIndex, score);
          }}
        />
      </PageContent>
      <ControlPanel data-app-hidden={!GolfUtils.roundIsComplete(golfRound)}>
        <RectButton>Hello</RectButton>
      </ControlPanel>
    </PageLayout>
  );
};
export default ScorecardPage;
