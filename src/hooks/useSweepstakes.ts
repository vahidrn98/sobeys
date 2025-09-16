import { useState, useCallback } from 'react';
import { Sweepstake } from '../types';

// Mock data for sweepstakes
const mockSweepstakes: Sweepstake[] = [
  {
    id: '1',
    title: 'Sweepstake Title #1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '../assets/Sweep.png',
    buttonText: 'Enter Sweepstake',
  },
  {
    id: '2',
    title: 'Sweepstake Title #2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '../assets/Sweep.png',
    buttonText: 'Enter Sweepstake',
  },
  {
    id: '3',
    title: 'Sweepstake Title #3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '../assets/Sweep.png',
    buttonText: 'Enter Sweepstake',
  },
];

export const useSweepstakes = () => {
  const [sweepstakes] = useState<Sweepstake[]>(mockSweepstakes);

  const handleSweepstakePress = useCallback(() => {
    console.log('Sweepstake pressed');
    // In a real app, this would handle navigation or API calls
  }, []);

  const handleViewAllSweepstakes = useCallback(() => {
    console.log('View all sweepstakes');
    // In a real app, this would navigate to a full sweepstakes list
  }, []);

  return {
    sweepstakes,
    handleSweepstakePress,
    handleViewAllSweepstakes,
  };
};
