import { useState, useCallback, useEffect } from 'react';
import { Challenge } from '../types/challenge';
import { mockChallenges } from '../data/mockChallenges';

export const useChallenges = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const loadChallenges = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setChallenges(mockChallenges);
      } catch (err) {
        setError('Failed to load challenges');
      } finally {
        setLoading(false);
      }
    };

    loadChallenges();
  }, []);

  const handleChallengePress = useCallback((challengeId: string) => {
    // In a real app, this would handle navigation or API calls
    // navigation.navigate('ChallengeDetail', { challengeId });
  }, []);

  const handleViewAllChallenges = useCallback(() => {
    // In a real app, this would navigate to a full challenges list
    // navigation.navigate('AllChallenges');
  }, []);

  const handleViewCompleted = useCallback(() => {
    // In a real app, this would navigate to completed challenges
    // navigation.navigate('CompletedChallenges');
  }, []);

  return {
    challenges,
    loading,
    error,
    handleChallengePress,
    handleViewAllChallenges,
    handleViewCompleted,
  };
};
