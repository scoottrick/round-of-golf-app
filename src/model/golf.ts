import { arrayOfN, createId, EntityId } from './utils';

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
      id: createId(),
      name: name,
      scores: [],
    };
  }

  static golferCompletedRound(golfer: Golfer): boolean {
    return golfer.scores.every(score => score > 0);
  }

  static roundIsComplete(round: GolfRound): boolean {
    return round.golfers.every(golfer =>
      GolfUtils.golferCompletedRound(golfer)
    );
  }

  static holesWithPar(count: number, par: number): GolfHole[] {
    return arrayOfN(count).map(() => ({ par }));
  }

  static newCourse(name: string, holes: GolfHole[]): GolfCourse {
    return {
      id: createId(),
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
      id: createId(),
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
