export class AppRoutes {
  static home = '/';
  static roundSetup = '/round-setup';
  static scorecard = '/scorecard';
  static withPath(...args: string[]) {
    return args.join('/');
  }
}
