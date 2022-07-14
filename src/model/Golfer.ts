import { v4 as uuid } from 'uuid';

export interface Golfer {
  id: string;
  name: string;
}

export function createGolfer(name: string): Golfer {
  return { id: uuid(), name };
}
