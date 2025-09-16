export interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: number;
  tags: string[];
  image: string | number; // string for URL, number for require()
  buttonText: string;
  status: 'active' | 'completed' | 'upcoming';
  isDisabled?: boolean;
  voila?: boolean;
  offer?: string;
}
