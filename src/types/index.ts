export interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: number;
  tags: string[];
  image: string;
  buttonText: string;
  status: 'active' | 'completed' | 'upcoming';
  isDisabled?: boolean;
  voila?: boolean;
  offer?: string;
}

export interface Sweepstake {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

export interface UserStats {
  chipsBalance: number;
  challengesCompleted: number;
  rewards: number;
}

export interface ScenePlusPoints {
  points: number;
  onViewAll?: () => void;
}

export interface FreeProducts {
  freeProducts: number;
  onViewAll?: () => void;
}