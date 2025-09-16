export interface Sweepstake {
  id: string;
  title: string;
  description: string;
  image: string | number; // string for URL, number for require()
  buttonText: string;
}
