import React from 'react';
import {
  PageLayout,
  PageContent,
  ControlPanel,
  RectButton,
} from '../../components';
import { GolfUtils } from '../../model/golf';
import { classNames } from '../../model/utils';

const mockGolfers = GolfUtils.createGolfers(['Tom', 'Dick', 'Harry']);
const mockCourse = GolfUtils.newPar3Course('Lunar Lake', 18);
const mockRound = GolfUtils.newRound(mockGolfers, mockCourse);

const CardDataCell = ({ heading, shaded, children }) => {
  return (
    <span
      className={classNames([
        'text-center',
        [heading, 'border-b-2 py-2 px-4', 'border-b py-1 px-2'],
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
        'flex flex-col border-r last:border-r-0',
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

const ScoreColumn = ({ golfer }) => {
  return (
    <CardDataList grows={true}>
      <CardDataCell heading={true} shaded={false}>
        {golfer.name}
      </CardDataCell>
      {golfer.scores.map((s, i) => (
        <CardDataCell key={i} shaded={i % 2 !== 0} heading={false}>
          {s || '--'}
        </CardDataCell>
      ))}
    </CardDataList>
  );
};

const Card = ({ holes, golfers }) => {
  return (
    <div className="flex flex-row justify-between">
      <HoleColumn holes={holes} />
      {golfers.map((g, i) => (
        <ScoreColumn key={i} golfer={g} />
      ))}
    </div>
  );
};

const ScorecardPage = () => {
  const golfRound = mockRound;
  return (
    <PageLayout>
      <PageContent className="py-0 px-0">
        <Card holes={golfRound.course.holes} golfers={golfRound.golfers} />
      </PageContent>
      <ControlPanel data-app-hidden={false}>
        <RectButton>Hello</RectButton>
      </ControlPanel>
    </PageLayout>
  );
};
export default ScorecardPage;
