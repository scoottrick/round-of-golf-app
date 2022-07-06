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

  static newRound(golfers: Golfer[], course: GolfCourse): GolfRound {
    const blankScores = course.holes.map(() => 0);
    const golfersWithScores = golfers.map(golfer => {
      return { ...golfer, scores: [...blankScores] };
    });
    return {
      id: entityId(),
      date: Date.now(),
      completed: false,
      golfers: golfersWithScores,
      course: course,
    };
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
