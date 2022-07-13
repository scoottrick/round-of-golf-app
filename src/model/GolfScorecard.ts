export interface GolfScorecard {
  golferId: string;
  strokes: number[];
}

export function createBlankScorecard(
  golferId: string,
  holes: number
): GolfScorecard {
  const strokes = [] as number[];
  for (let i = 0; i < holes; i++) {
    strokes.push(0);
  }
  return { golferId, strokes };
}
