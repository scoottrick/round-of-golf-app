export class AppRoutes {
  static home = '/';
  static scorecard = '/scorecard';
  static withPath(...args: string[]) {
    return args.join('/');
  }
}
