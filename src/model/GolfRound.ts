import { v4 as uuid } from 'uuid';

import { Golfer } from './Golfer';
import { createBlankScorecard, GolfScorecard } from './GolfScorecard';

export interface GolfRound {
  id: string;
  timestamp: number;
  completed: boolean;
  scorecards: GolfScorecard[];
  course: { holeCount: number };
}

export function createRound(holeCount: number, golfers: Golfer[]): GolfRound {
  return {
    id: uuid(),
    completed: false,
    timestamp: Date.now(),
    course: { holeCount },
    scorecards: golfers.map(golfer =>
      createBlankScorecard(golfer.id, holeCount)
    ),
  };
}
