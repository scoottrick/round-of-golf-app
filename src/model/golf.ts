import { v4 as uuid } from 'uuid';

type EntityId = string;

const entityId = () => uuid() as EntityId;
const arrayOfN = (n: number) => [...new Array(n)];
export interface Golfer {
  id: EntityId;
  name: string;
  scores: number[];
}

export interface GolfHole {
  par: number;
}

export interface GolfCourse {
  id: EntityId;
  name: string;
  holes: { par: number }[];
}

export interface GolfRound {
  id: EntityId;
  date: number;
  completed: boolean;
  golfers: Golfer[];
  course: GolfCourse;
}

export const createGolfers = (names: string[]) => {
  const validNames = names.filter(name => name.trim().length);
  const golfers: Golfer[] = validNames.map(name => ({
    id: entityId(),
    name: name,
    scores: [],
  }));
  return golfers;
};

export const createGolfCourse = (name: string, holeCount: number) => {
  const id = entityId();
  const holes = arrayOfN(holeCount).map(() => ({ par: 0 }));
  const course: GolfCourse = { id, name, holes };
  return course;
};

export const createGolfRound = (golfers: Golfer[], course: GolfCourse) => {
  const emptyScores = course.holes.map(() => 0);
  const newRound: GolfRound = {
    id: entityId(),
    date: Date.now(),
    completed: false,
    golfers: golfers.map(g => ({ ...g, scores: emptyScores })),
    course: course,
  };
  return newRound;
};

export class GolfUtils {
  static createGolfers(names: string[]): Golfer[] {
    return names.map(name => GolfUtils.createGolfer(name));
  }
  private static createGolfer(name: string): Golfer {
    return {
      id: entityId(),
      name: name,
      scores: [],
    };
  }

  static newCourse(name: string, holes: GolfHole[]): GolfCourse {
    return {
      id: entityId(),
      name: name || `${holes.length} Holes`,
      holes: holes,
    };
  }
  static newPar3Course(name: string, holeCount: number): GolfCourse {
    return GolfUtils.newCourse(
      name,
      arrayOfN(holeCount).map(() => ({ par: 3 }))
    );
  }

  static calcStrokes(golfer: Golfer): number {
    return golfer.scores
      .filter(s => s > 0)
      .reduce((acc, curr) => acc + curr, 0);
  }

  static findRoundWinners(round: GolfRound): Golfer[] {
    const golfers = [...round.golfers];
    const initialGolfer = golfers.splice(0, 1)[0];
    let leaders = [initialGolfer];
    let minScore = GolfUtils.calcStrokes(initialGolfer);
    for (let golfer of round.golfers) {
      const score = GolfUtils.calcStrokes(golfer);
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
