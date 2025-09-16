import { useState, useCallback, useEffect } from 'react';
import { Challenge } from '../types/challenge';
import { Sweepstake } from '../types/sweepstake';
import { mockOverviewChallenges } from '../data/mockChallenges';
import { mockSweepstake } from '../data/mockSweepstakes';

export const useOverview = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [sweepstake, setSweepstake] = useState<Sweepstake | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        setChallenges(mockOverviewChallenges);
        setSweepstake(mockSweepstake);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleChallengePress = useCallback(() => {
    // In a real app, this would handle navigation or API calls
    // navigation.navigate('ChallengeDetail');
  }, []);

  const handleSweepstakePress = useCallback(() => {
    // In a real app, this would handle navigation or API calls
    // navigation.navigate('SweepstakeDetail');
  }, []);

  const handleViewAllChallenges = useCallback(() => {
    // In a real app, this would navigate to challenges screen
    // navigation.navigate('Challenges');
  }, []);

  const handleViewAllSweepstakes = useCallback(() => {
    // In a real app, this would navigate to sweepstakes screen
    // navigation.navigate('Sweepstakes');
  }, []);

  return {
    challenges,
    sweepstake,
    loading,
    error,
    handleChallengePress,
    handleSweepstakePress,
    handleViewAllChallenges,
    handleViewAllSweepstakes,
  };
};
