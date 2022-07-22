import { v4 as uuid } from 'uuid';

export type GolferId = string;

export interface Golfer {
  id: GolferId;
  name: string;
}

export function createGolfer(name: string): Golfer {
  return { id: uuid(), name };
}
