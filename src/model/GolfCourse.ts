export interface GolfCourse {
  name: string;
  holeCount: number;
}

export function createCourse(name: string, holeCount: number): GolfCourse {
  return { name, holeCount };
}
