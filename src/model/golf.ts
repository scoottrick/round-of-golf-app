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
  golfers: Golfer[];
  course: GolfCourse;
}
