import { v4 as uuid } from 'uuid';

export type EntityId = string;
export const createId = () => uuid() as EntityId;

export const arrayOfN = (n: number) => [...new Array(n)];

type NameArg = undefined | string | [boolean, string, string?];
export const classNames = (args: NameArg[]) => {
  const allNames: string[] = [];
  for (let arg of args) {
    if (typeof arg === 'string') {
      allNames.push(arg);
      continue;
    }
    if (Array.isArray(arg)) {
      const [condition, trueClass, falseClass] = arg;
      const result = condition ? trueClass : falseClass;
      result && allNames.push(result);
      continue;
    }
  }
  return allNames.join(' ');
};
