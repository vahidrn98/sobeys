import { useState, useCallback } from 'react';
import { Challenge, Sweepstake } from '../types';

// Mock data for overview screen
const mockChallenges: Challenge[] = [
  {
    id: '1',
    title: 'Open the mobile app weekly',
    description: 'Open the app at least once per week until April 30th, 2025, to earn 2 chips each week.',
    reward: 5,
    tags: ['5', 'voila', 'Free Product Offer'],
    offer: "Free Product Offer",
    image: '../assets/challenge.png',
    buttonText: 'Start Challenge',
    status: 'active',
    voila: true,
  },
  {
    id: '2',
    title: 'Complete your profile',
    description: 'Fill out your profile information to earn 3 chips and unlock exclusive offers.',
    reward: 3,
    tags: ['3', 'voila', 'Profile'],
    offer: "Free Product Offer",
    image: '../assets/challenge.png',
    buttonText: 'Complete Now',
    status: 'active',
    voila: true,
  },
  {
    id: '3',
    title: 'Share with friends',
    description: 'Invite friends to join the app and earn 10 chips for each successful referral.',
    reward: 10,
    tags: ['10', 'voila', 'Referral'],
    offer: "Free Product Offer",
    image: '../assets/challenge.png',
    buttonText: 'Share Now',
    status: 'active',
    voila: true,
  },
];

const mockSweepstake: Sweepstake = {
  id: '1',
  title: 'Sweepstake Title #1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '../assets/Sweep.png',
  buttonText: 'Enter Sweepstake',
};

export const useOverview = () => {
  const [challenges] = useState<Challenge[]>(mockChallenges);
  const [sweepstake] = useState<Sweepstake>(mockSweepstake);

  const handleChallengePress = useCallback(() => {
    console.log('Challenge pressed');
    // In a real app, this would handle navigation or API calls
  }, []);

  const handleSweepstakePress = useCallback(() => {
    console.log('Sweepstake pressed');
    // In a real app, this would handle navigation or API calls
  }, []);

  const handleViewAllChallenges = useCallback(() => {
    console.log('Navigate to challenges screen');
    // In a real app, this would navigate to challenges screen
  }, []);

  const handleViewAllSweepstakes = useCallback(() => {
    console.log('Navigate to sweepstakes screen');
    // In a real app, this would navigate to sweepstakes screen
  }, []);

  return {
    challenges,
    sweepstake,
    handleChallengePress,
    handleSweepstakePress,
    handleViewAllChallenges,
    handleViewAllSweepstakes,
  };
};
