import { v4 as uuid } from 'uuid';
export interface Golfer {
  id: string;
  name: string;
  scores: number[];
}

export interface GolfCourse {
  name: string;
  holes: { par: number }[];
}

export interface GolfRound {
  id: string;
  date: number;
  completed: boolean;
  golfers: Golfer[];
  course: GolfCourse;
}

export const createGolfers = (names: string[]) => {
  const validNames = names.filter(name => name.trim().length);
  const golfers: Golfer[] = validNames.map(name => ({
    id: uuid(),
    name: name,
    scores: [],
  }));
  return golfers;
};

export const createGolfCourse = (name: string, holeCount: number) => {
  const holes = [...new Array(holeCount)].map(() => ({ par: 0 }));
  const course: GolfCourse = { name, holes };
  return course;
};

export const createGolfRound = (golfers: Golfer[], course: GolfCourse) => {
  const emptyScores = course.holes.map(() => 0);
  const newRound: GolfRound = {
    id: uuid(),
    date: Date.now(),
    completed: false,
    golfers: golfers.map(g => ({ ...g, scores: emptyScores })),
    course: course,
  };
  return newRound;
};

export class GolfUtils {
  static calcStrokes(golfer: Golfer): number {
    return golfer.scores
      .filter(s => s > 0)
      .reduce((acc, curr) => acc + curr, 0);
  }

  static findRoundWinners(round: GolfRound): Golfer[] {
    const golfers = [...round.golfers];
    const initialGolfer = golfers.splice(0, 1)[0];
    let leaders = [initialGolfer];
    let minScore = this.calcStrokes(initialGolfer);
    for (let golfer of round.golfers) {
      const score = this.calcStrokes(golfer);
      if (score === minScore) {
        leaders = [...leaders, golfer];
        break;
      }
      if (score < minScore) {
        leaders = [golfer];
        minScore = score;
        break;
      }
    }
    return leaders;
  }
}
