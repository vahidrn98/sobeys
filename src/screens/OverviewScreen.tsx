import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatsCard } from '../components/StatsCard';
import { ChallengeCard } from '../components/ChallengeCard';
import { SweepstakeCard } from '../components/SweepstakeCard';
import { Colors } from '../constants/colors';
import { Challenge, Sweepstake } from '../types';

// Mock data - in a real app, this would come from an API
const mockChallenge: Challenge = {
  id: '1',
  title: 'Open the mobile app weekly',
  description: 'Open the app at least once per week until April 30th, 2025, to earn 2 chips each week.',
  reward: 5,
  tags: ['5', 'voila', 'Free Product Offer'],
  image: 'https://via.placeholder.com/300x150/F5F5F5/666666?text=Mobile+App+Challenge',
  buttonText: 'Start Challenge',
};

const mockSweepstake: Sweepstake = {
  id: '1',
  title: 'Sweepstake Title #1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: 'https://via.placeholder.com/300x150/1A1A1A/FF69B4?text=FPO',
  buttonText: 'Enter Sweepstake',
};

export const OverviewScreen: React.FC = () => {
  const handleChallengePress = () => {
    console.log('Challenge pressed');
  };

  const handleSweepstakePress = () => {
    console.log('Sweepstake pressed');
  };

  const handleViewAllChallenges = () => {
    console.log('View all challenges');
  };

  const handleViewAllSweepstakes = () => {
    console.log('View all sweepstakes');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <StatsCard 
            icon="logo-bitcoin" 
            title="Chips Balance" 
            value="1,000" 
          />
          <StatsCard 
            icon="checkmark-circle" 
            title="Challenges Completed" 
            value="10" 
          />
          <StatsCard 
            icon="gift" 
            title="My Rewards" 
            value="" 
          />
        </View>

        {/* Latest Challenges Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Challenges</Text>
            <TouchableOpacity onPress={handleViewAllChallenges}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionDescription}>
            Complete weekly challenges, answer trivia, and check back for more chances to win.
          </Text>
          <ChallengeCard 
            challenge={mockChallenge} 
            onPress={handleChallengePress}
          />
        </View>

        {/* Sweepstakes Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Sweepstakes</Text>
            <TouchableOpacity onPress={handleViewAllSweepstakes}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionDescription}>
            Carousel body text lorem ipsum ementum consectetur nulla dignissim.
          </Text>
          <SweepstakeCard 
            sweepstake={mockSweepstake} 
            onPress={handleSweepstakePress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 8,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
  },
  viewAllText: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '500',
  },
  sectionDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
});
