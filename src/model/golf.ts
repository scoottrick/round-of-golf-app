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
