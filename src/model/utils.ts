import { v4 as uuid } from 'uuid';

export type EntityId = string;

export const createId = () => uuid() as EntityId;
export const arrayOfN = (n: number) => [...new Array(n)];
