import { Golfer } from './Golfer';

export type GolfScorecard = { [golferId: string]: number[] };

export function createBlankScorecard(
  golfers: Golfer[],
  holes: number
): GolfScorecard {
  const scorecard: GolfScorecard = {};
  for (let golfer of golfers) {
    const strokes = [] as number[];
    for (let i = 0; i < holes; i++) {
      strokes.push(0);
    }
    scorecard[golfer.id] = strokes;
  }
  return scorecard;
}
