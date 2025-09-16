import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ChallengeCard } from '../components/ChallengeCard';
import { SweepstakeCard } from '../components/SweepstakeCard';
import { Colors, Fonts } from '../constants/colors';
import { Challenge, Sweepstake } from '../types';

// Mock data - in a real app, this would come from an API
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

export const OverviewScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleChallengePress = () => {
    console.log('Challenge pressed');
  };

  const handleSweepstakePress = () => {
    console.log('Sweepstake pressed');
  };

  const handleViewAllChallenges = () => {
    navigation.navigate('Challenges' as never);
  };

  const handleViewAllSweepstakes = () => {
    navigation.navigate('Sweepstakes' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.challengesScrollContainer}
            style={styles.challengesScrollView}
          >
            {mockChallenges.map((challenge) => (
              <View key={challenge.id} style={styles.challengeCardContainer}>
                <ChallengeCard 
                  challenge={challenge} 
                  onPress={handleChallengePress}
                />
              </View>
            ))}
          </ScrollView>
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
  section: {
    paddingHorizontal: 16,
    paddingTop: 24,
    // marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: Fonts.titleBold,
    color: Colors.text,
  },
  viewAllText: {
    fontSize: 16,
    color: Colors.primary,
    fontFamily: Fonts.bold,
  },
  sectionDescription: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  challengesScrollView: {
    marginHorizontal: -16,
  },
  challengesScrollContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  challengeCardContainer: {
    width: 350,
    paddingBottom: 16,
  },
});
