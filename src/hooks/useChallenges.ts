import { useState, useCallback, useEffect, useMemo } from 'react';
import { Challenge } from '../types/challenge';
import { mockChallenges } from '../data/mockChallenges';

export const useChallenges = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchQuery]);

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

  // Filter challenges based on search query
  const filteredChallenges = useMemo(() => {
    if (!debouncedSearchQuery.trim()) {
      return challenges;
    }

    const query = debouncedSearchQuery.toLowerCase().trim();
    return challenges.filter(challenge => 
      challenge.title.toLowerCase().includes(query) ||
      challenge.description.toLowerCase().includes(query) ||
      challenge.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }, [challenges, debouncedSearchQuery]);

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

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return {
    challenges: filteredChallenges,
    loading,
    error,
    searchQuery,
    handleChallengePress,
    handleViewAllChallenges,
    handleViewCompleted,
    handleSearchChange,
  };
};
