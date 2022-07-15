export interface DivComponent extends React.HTMLAttributes<HTMLDivElement> {}
export interface ButtonComponent
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function tailwindClass(...parts: (string | number)[]) {
  return parts.join('-');
}

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
