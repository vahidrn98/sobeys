export type RootStackParamList = {
  Dashboard: undefined;
  Overview: undefined;
  Challenges: undefined;
  Sweepstakes: undefined;
};

export type TabParamList = {
  Overview: undefined;
  Challenges: undefined;
  Sweepstakes: undefined;
  Dashboard: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
