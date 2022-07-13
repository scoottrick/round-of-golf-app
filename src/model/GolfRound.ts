import { v4 as uuid } from 'uuid';

import { Golfer } from './Golfer';
import { GolfCourse, createCourse } from './GolfCourse';
import { createBlankScorecard, GolfScorecard } from './GolfScorecard';

export interface GolfRound {
  id: string;
  timestamp: number;
  completed: boolean;
  scorecard: GolfScorecard;
  course: GolfCourse;
}

export function createRound(holeCount: number, golfers: Golfer[]): GolfRound {
  return {
    id: uuid(),
    completed: false,
    timestamp: Date.now(),
    course: createCourse(`${holeCount} Holes`, holeCount),
    scorecard: createBlankScorecard(golfers, holeCount),
  };
}
