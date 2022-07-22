import { v4 as uuid } from 'uuid';

import { Golfer } from './Golfer';
import { GolfCourse, createCourse } from './GolfCourse';
import { createBlankScorecard, GolfScorecard } from './GolfScorecard';

export type GolfRoundId = string;

export interface GolfRound {
  id: GolfRoundId;
  timestamp: number;
  completed: boolean;
  golferIds: string[];
  scorecard: GolfScorecard;
  course: GolfCourse;
}

export function createRound(holeCount: number, golfers: Golfer[]): GolfRound {
  const scorecard = createBlankScorecard(golfers, holeCount);
  const golferIds = Object.keys(scorecard);
  return {
    id: uuid(),
    completed: false,
    timestamp: Date.now(),
    course: createCourse(`${holeCount} Holes`, holeCount),
    scorecard,
    golferIds,
  };
}
