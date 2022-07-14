import { v4 as uuid } from 'uuid';

export type EntityId = string;
export const createId = () => uuid() as EntityId;

export interface DivComponent extends React.HTMLAttributes<HTMLDivElement> {}
export interface ButtonComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const arrayOfN = <T>(n: number, val?: any): T[] => {
  const result: T[] = [];
  for (let i = 0; i < n; i++) {
    result.push(val);
  }
  return result;
};

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
