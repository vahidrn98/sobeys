import { useState, useCallback } from 'react';
import { Challenge } from '../types';

// Mock data for challenges
const mockChallenges: Challenge[] = [
  {
    id: '1',
    title: 'Redeem Any Offer In Store',
    description: 'Earn 5 chips for redeeming any personalized or digital offer in store. It doesn\'t get any better than that.',
    reward: 5,
    tags: ['5', 'Free Product Offer'],
    offer: "Free Product Offer",
    image: 'challenge.png',
    buttonText: 'Start Challenge',
    status: 'active',
    voila: false,
  },
  {
    id: '2',
    title: 'Lorem Contest Title',
    description: 'Earn 5 chips for redeeming any personalized or digital offer in store. It doesn\'t get any better than that.',
    reward: 10,
    tags: ['10', 'Free Product Offer'],
    offer: "Free Product Offer",
    image: 'challenge.png',
    buttonText: 'Check Back Next Week',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Complete Our Own Brand Trivia for this Week',
    description: 'Earn 5 chips for redeeming any personalized or digital offer in store. It doesn\'t get any better than that.',
    reward: 5,
    tags: ['5', 'Free Product Offer'],
    offer: "Free Product Offer",
    image: 'challenge.png',
    buttonText: 'Check Back Next Week',
    status: 'upcoming',
  },
];

export const useChallenges = () => {
  const [challenges] = useState<Challenge[]>(mockChallenges);

  const handleChallengePress = useCallback((challengeId: string) => {
    console.log('Challenge pressed:', challengeId);
    // In a real app, this would handle navigation or API calls
  }, []);

  const handleViewAllChallenges = useCallback(() => {
    console.log('View all challenges');
    // In a real app, this would navigate to a full challenges list
  }, []);

  const handleViewCompleted = useCallback(() => {
    console.log('View completed challenges pressed');
    // In a real app, this would navigate to completed challenges
  }, []);

  return {
    challenges,
    handleChallengePress,
    handleViewAllChallenges,
    handleViewCompleted,
  };
};
